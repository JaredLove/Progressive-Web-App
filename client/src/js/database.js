import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT request to update the jateDB');
 // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
    // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // open the object store
  const store = tx.objectStore('jate');

  const req = store.put({ id: 1, value: content })
  // confirm the data was added
  const res = await req;
  console.log('data saved to the jateDB', res);
  console.error('putDb not implemented');
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Getting data from the jateDB');
 // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // use the .getAll() method to get all the content in the DB
  const req = store.getAll()
  // confirm the data was fetched
  const res = await req;
  console.log('data saved to the jateDB', res);
  console.error('getDb not implemented');
};

initdb();
