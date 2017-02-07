/**
 * E27: Five Problems ... part 2
 * Created by Rae on 2/6/17.
 */

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(data1, data2){
  let final = [];
  let i = 0;
  while(i < data1.length){
    final.push(data1[i], data2[i]);
    i++;
  }
  return final;
}

console.log(zipList(list1, list2));

//time: 11:42

function zipListTheSimpleWay(data1, data2){
  return _.flatten(_.zip(data1, data2));
}

console.log(zipListTheSimpleWay(list1, list2));