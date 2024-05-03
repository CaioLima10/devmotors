export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}-c1fb8970-00b6-11ef-8105-49ad14d0e9e7/objects/66267edb8eeb799dd185fd5f?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      {
        next: { revalidate: 120 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}-c1fb8970-00b6-11ef-8105-49ad14d0e9e7/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,thumbnail`,
      {
        next: { revalidate: 120 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
