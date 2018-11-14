export function chain () {
  const urls = Array.prototype.slice.call(arguments);
  return Promise.all( urls.map(url => fetch(url).then(data => data.json())
  )).then( results => results);
}

(async function () {
  const result = await chain(
    'http://jsonplaceholder.typicode.com/posts/1',
    'http://jsonplaceholder.typicode.com/posts/2',
    'http://jsonplaceholder.typicode.com/posts/3');
  result.map(data => console.log(data));
}) ();
