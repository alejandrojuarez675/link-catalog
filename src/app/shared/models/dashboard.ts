export interface Dashboard {
  id: string,
  data: LinkNode,
  privacy: "PUBLIC" | "RESTRICTED"
}

export interface LinkNode {
  id: string,
  type: "MENU" | "LINK" | "FOLDER",
  title: string,
  description: string | null,
  urlLogo: string | undefined | null,
  link: string | null,
  nodes: LinkNode[],
}
