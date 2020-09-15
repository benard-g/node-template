// import 'source-map-support/register';

async function main(): Promise<void> {
  console.log('Hello World !');
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
  });
}
