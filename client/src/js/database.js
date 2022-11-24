import { openDB } from 'idb';

const initdb = async () =>
// We are creating a new database named 'jate which will be using version 1 of the database.
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

  export const putDb = async (content) => {    
    console.error('putDb not implemented');
      // Create a connection to the database database and version we want to use.
    const jateDB = await openDB('jate', 1);
    // Create a new transaction and specify the database and data privileges.
    const tx = jateDB.transaction('jate', 'readwrite');
     // Open up the desired object store.
    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, value: content });
      // Get confirmation of the request.
    const result = await request;
    
    console.log(result);
  };
  
  // Retrieve text from indexedDB
  export const getDb = async (e) => {
    console.error('getDb not implemented');
      // Create a connection to the database database and version we want to use.
    const jateDb = await openDB('jate', 1);
    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction('jate', 'readonly');
     // Open up the desired object store.
    const store = tx.objectStore('jate');
    const request = store.get(1);
      // Get confirmation of the request.
    const result = await request;

    return result?.value;
  };
initdb();
