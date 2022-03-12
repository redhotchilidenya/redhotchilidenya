function Block(main, strong, sea, walking, child) {
  this.main = main;
  this.strong = strong;
  this.sea = sea;
  this.walking = walking;
  this.child = child;
}

function FindCode(block) {

  if (tree[block.walking].code != '') {
    block.code = tree[block.walking].code + '1';
}
  else {
  if (block.main == tree[minIndex].letter) {
    block.code = '0';
    }
      else if (block.main == tree[preminIndex].letter) {
      block.code = '1';
    }
        else {
       FindCode(tree[block.walking]);
       block.code = tree[block.walking].code + '0';
       }
     }
   }
