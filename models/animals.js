const db = require('../db');

const getAllAnimals = async () => {
  const allAnimals = db.query('SELECT * from animals');
  return allAnimals;
};

const getAllAnimalsFiltered = async (req) => {
  console.log('req.query : ', req.query);
  let sqlBasic = 'SELECT * FROM animals';
  let sqlQuery = '';
  const reqQuery = req.query;
  const queryArray = [];
  const queryArrayValues = [];

  for (const query in reqQuery) {
    if (reqQuery[query] !== '') {
      queryArray.push(query);
    }
  }

  if (queryArray.length !== 0) {
    sqlQuery += ' WHERE ';
    if (queryArray[0] === 'age') {
      sqlQuery += `${queryArray[0]} <= ?`;
    } else {
      sqlQuery += `${queryArray[0]} = ?`;
    }

    queryArrayValues.push(req.query[queryArray[0]]);
    for (let i = 1; i < queryArray.length; i += 1) {
      if (queryArray[i] === 'age') {
        sqlQuery += ` AND ${queryArray[i]} <= ?`;
      } else {
        sqlQuery += ` AND ${queryArray[i]} = ?`;
      }
      queryArrayValues.push(req.query[queryArray[i]]);
    }
  }

  sqlBasic += sqlQuery;

  console.log('sqlBasic', sqlBasic);

  const allAnimals = db.query(sqlBasic, queryArrayValues);
  //   const allAnimals = db.query('SELECT * FROM animals WHERE sex = ?', [
  //     'Femelle',
  //   ]);
  return allAnimals;
};

module.exports = {
  getAllAnimals,
  getAllAnimalsFiltered,
};
