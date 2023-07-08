interface Dashboard {
  id: String,
  data: LinkNode,
  privacy: "PUBLIC" | "RESTRICTED"
}

interface LinkNode {
  id: String,
  type: "MENU" | "LINK" | "FOLDER",
  title: String,
  description: String,
  urlLogo: String | undefined,
  nodes: LinkNode[],
}
