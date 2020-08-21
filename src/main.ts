async function main(): Promise<void> {
  console.log('Hello World !');
}

if (!module.parent) {
  main().catch((err) => {
    console.error(err);
  });
}
