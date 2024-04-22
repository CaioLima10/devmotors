export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}-c1fb8970-00b6-11ef-8105-49ad14d0e9e7/objects/66267edb8eeb799dd185fd5f?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
