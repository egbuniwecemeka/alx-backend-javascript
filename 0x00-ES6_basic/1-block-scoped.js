export default function taskBlock(trueOrFalse) {
  var task;
  var task2;
  
  task = false
  task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
