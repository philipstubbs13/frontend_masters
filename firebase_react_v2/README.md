# Firebase with React, v2

* <https://frontendmasters.com/courses/firebase-react-v2/>
* Setup and GitHub repos: <https://gist.github.com/stevekinney/b3f913a2d4c0e6dfd455d4c220924721>

## Cloud Firestore vs. The Realtime Database

* Cloud Firestore is technically in beta, but Firebase is pushing it real hard.
* It's designed for scalability.
* The Realtime Database might be cheaper if you're doing a ton of read and write queries, but generally speaking, Cloud Firestore is likely a better bet.

## The structure of Cloud Firestore

* Cloud Firestore is Based on Collections.
* In the realtime database, you got whatever node of the tree you required and all of its subnodes.
  * This meant you had to be really careful about how you structured your data.
* In Cloud Firestore, queries are shallow. You don't get all of the sub-collections by default.
* You still need to be mindful, but maybe less paranoid.

## Collections intro

```bash
firestore.collection('posts');
firestore.collection('posts').doc('sgoIdfI70uZ4Tdp1GVuG');
firestore.collection('posts').doc('sgoIdfI70uZ4Tdp1GVuG').collection('comments');
firestore.collection('posts')
  .doc('sgoIdfI70uZ4Tdp1GVuG')
  .collection('comments');
  .doc('y3sbHKLEjtNr74hHZqsR');
firestore.collection('posts/sgoIdfI70uZ4Tdp1GVuG');
firestore.doc('posts/sgoIdfI70uZ4Tdp1GVuG/comments/y3sbHKLEjtNr74hHZqsR');
```

## Ordering

```bash
firestore.collection('posts').orderBy('createdAt', 'desc');
```

## Limiting

```bash
firestore.collection('posts').limit(10);
```

## Querying

```bash
firestore.collection('posts').where('stars', '>=', 10);
```

## QuerySnapshot Properties

* docs: All of the documents in the snapshot.
* empty: This is a boolean that lets us know if the snapshot was empty.
* metadata: Metadata about this snapshot, concerning its source and if it has local modifications.
* query: A reference to the query that you fired.
* size: The number of documents in the QuerySnapshot.

## QuerySnapshot Methods

* docChanges(): An array of the changes since the last snapshot.
* forEach(): Iterates over the entire array of snapshots.
* isEqual(): Let's you know if it matches another snapshot.

## DocumentSnapshots

* QuerySnapshots typically hold onto a number QueryDocumentSnapshots, which inherit from DocumentSnapshots.

## DocumentSnapshot Properties

* id: The id of the given document.
* exists: Is this even a thing in the database?
* metadata: Pretty much the same as QuerySnapshot above.
* ref: A reference to the documents location in the database.

## DocumentSnapshot Methods

* data(): Gets all of the fields of the object.
* get(): Allows you to access a particular property on the object.
* isEqual(): Useful for comparisons.
