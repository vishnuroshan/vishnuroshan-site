import io
import re
import sys
from html.parser import HTMLParser

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag = tag
        self.attrs = dict(attrs or {})
        self.parent = parent
        self.children = []

    @property
    def classes(self):
        return self.attrs.get("class", "").split()

    def walk(self):
        for child in self.children:
            if isinstance(child, Node):
                yield child
                for node in child.walk():
                    yield node

    def find(self, tag=None, cls=None, node_id=None):
        for node in self.walk():
            if tag and node.tag != tag:
                continue
            if cls and cls not in node.classes:
                continue
            if node_id and node.attrs.get("id") != node_id:
                continue
            return node
        return None

    def find_all(self, tag=None, cls=None):
        found = []
        for node in self.walk():
            if tag and node.tag != tag:
                continue
            if cls and cls not in node.classes:
                continue
            found.append(node)
        return found

    def children_by(self, tag=None, cls=None):
        return [c for c in self.children
                if isinstance(c, Node)
                and (not tag or c.tag == tag)
                and (not cls or cls in c.classes)]

    @property
    def text(self):
        parts = []
        for child in self.children:
            if isinstance(child, str):
                parts.append(child)
            elif child.tag == "code":
                parts.append("`%s`" % child.text)
            else:
                parts.append(child.text)
        return re.sub(r"\s+", " ", "".join(parts)).strip()


class Tree(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root")
        self.current = self.root

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        if tag not in VOID:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.current.children.append(Node(tag, attrs, self.current))

    def handle_endtag(self, tag):
        node = self.current
        while node is not self.root and node.tag != tag:
            node = node.parent
        if node is not self.root:
            self.current = node.parent

    def handle_data(self, data):
        self.current.children.append(data)


def panel(root, cls):
    for node in root.find_all():
        if node.tag in ("section", "header") and cls in node.classes:
            return node
    return None


def sentence(text):
    text = text.strip()
    if text and not text.endswith((".", "!", "?")):
        text += "."
    return text


def build(html):
    tree = Tree()
    tree.feed(html)
    root = tree.root

    header = panel(root, "panel")
    for node in root.find_all():
        if node.tag == "header":
            header = node
            break

    summary = panel(root, "panel--summary").find("p").text
    location = header.find("address").children_by("div")[0].text

    out = ["# Vishnu Roshan", "", "> %s" % summary, "", "## About", "",
           "- Based in %s" % sentence(location.replace(" 600097", ""))]

    for group in panel(root, "panel--skills").find_all("div", "skill-group"):
        label = group.find("h3", "skill-group-title").text
        items = [li.text for li in group.find("ul", "badges").children_by("li")]
        out.append("- %s: %s" % (label, sentence(", ".join(items))))

    out += ["", "## Experience", ""]
    for job in panel(root, "panel--work").find_all("div", "job"):
        title = job.find("h3", "job-title").text
        company = job.find("p", "company").text
        metas = [m.text for m in job.children_by("span", "meta")]
        bits = ["**%s**, %s (%s)." % (title, company, metas[0])]
        bits += [sentence(m) for m in metas[1:]]
        ul = job.find("ul")
        if ul:
            bits += [sentence(li.text) for li in ul.children_by("li")]
        out.append("- " + " ".join(bits))

    out += ["", "## Playground", ""]
    for job in panel(root, "panel--projects").find_all("div", "job"):
        link = job.find("h3", "job-title").find("a")
        meta = job.find("span", "meta")
        out.append("- [%s](%s): %s" % (link.text, link.attrs["href"],
                                       sentence(meta.text)))

    out += ["", "## Links", "", "- [Website](https://www.vishnuroshan.in/)"]
    for link in header.find_all("a", "icon-btn"):
        out.append("- [%s](%s)" % (link.attrs["aria-label"], link.attrs["href"]))
    email = header.find("address").find("a")
    out.append("- [Email](%s)" % email.attrs["href"])

    return "\n".join(out) + "\n"


if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "index.html"
    dst = sys.argv[2] if len(sys.argv) > 2 else "llms.txt"
    io.open(dst, "w", encoding="utf-8").write(
        build(io.open(src, encoding="utf-8").read()))
    print("wrote %s" % dst)
