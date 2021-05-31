// First, make a hash to keep track of the people who have voted
const voted = {};

const checkVoter = (name) => {
  // check if this person is in the hash
  if (voted[name]) {
    console.log('kick them out!');
  } else {
    // add their name to the hash
    voted[name] = true;
    console.log('let them vote!');
  }

  console.log(voted);
};


checkVoter('tom'); // let them vote!
checkVoter('mike'); // let them vote!
checkVoter('mike'); // kick them out!
