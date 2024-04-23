enum Keys {
  up = 'Up',
  down = 'Down',
  right = 'Right',
  left = 'Left',
}

const keyPress = (key: Keys) => {
  if (key === Keys.up) {
    console.log('Up pressed');
  } else if (key === 'Down') {
    console.log('Up pressed');
  } else if (key === Keys.right) {
    console.log('Right pressed');
  } else if (key === 'right') {
    //error as smaller case right is not present in Keys
    console.log('Right pressed');
  } else if (key === Keys.left) {
    console.log('Left pressed');
  }
};

// keyPress('up'); //error
// keyPress('Up'); //error
keyPress(Keys.up);
