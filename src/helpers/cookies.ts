export const getCookie = (name: string, cookies?: string) => {
  if (typeof window !== "undefined") {
    cookies = document.cookie;
  }

  if (!cookies) return false

  const match = cookies.match(new RegExp("(^| )" + name + "=([^;]+)"));

  if (!match) return false

  return match[2] as string
}