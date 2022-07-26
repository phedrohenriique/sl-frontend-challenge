import usersData from "../database/usersData";

// query is where all functions are stored to retrieve data, they can be used

const query = {

  hello: () => { return "query working" },

  world: () => { return 1 },

  users: () => { return usersData }

};

export default query
