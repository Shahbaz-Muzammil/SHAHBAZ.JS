const obj = { name: "GeeksForGeeks", city: "Noida", contact:2488 };
const myjson =JSON.stringify(obj);
// console.log(myjson)



// MERGING THE NESTED Object

const user = {
    name: 'David',
    phone: 122345678,
    location: {
      city: 'Camden',
      country: 'UK'
    }
  };
  const updates = {
    name: 'David',
    phone: 123456789,
    location: {
      city: 'Smithfield'
    }
  };
  console.log(Object.assign({}, user, updates));



//   USING THE SPREAD OPERATOR

const user1 = {
    name: 'David',
    phone: 122345678,
    location: {
      city: 'Camden',
      country: 'UK'
    }
  };
  const updates1 = {
    name: 'David',
    phone: 123456789,
    location: {
      city: 'Smithfield'
    }
  };
  console.log({ ...user1, ...updates1 });

  //   USING THE lodash Merge
  const user2 = {
    name: "David",
    phone: 122345678,
    location: {
      city: "Camden",
      country: "UK"
    }
  };
  const updates2 = {
    name: "David",
    phone: 123456789,
    location: {
      city: "Smithfield"
    }
  };
  console.log(_.merge(user2, updates2));

  



