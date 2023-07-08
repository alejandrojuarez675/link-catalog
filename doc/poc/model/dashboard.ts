interface Dashboard {
  id: String,
  data: LinkNode,
  privacy: "PUBLIC" | "RESTRICTED"
}

interface LinkNode {
  id: String,
  type: "MENU" | "LINK" | "FOLDER",
  title: String,
  description: String | null,
  urlLogo: String | undefined | null,
  nodes: LinkNode[],
}
