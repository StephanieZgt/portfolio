export default async function Page({
    params,
  }: {
    params: Promise<{ name: string }>
  }) {
    const name = (await params).name
    return (<div>
        <h1>Project name</h1>
        <p> carousel</p>
    </div>)
  }