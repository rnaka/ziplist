/**
 * E27: Five Problems ... part 2
 * Created by Rae on 2/6/17.
 */

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(data1, data2){
  const final = [];
  for (let i = 0; i < data1.length; i++){
    final.push(data1[i], data2[i]);
  }
  return final;
}

console.log(zipList(list1, list2));

//time: 11:42

function zipListTheSimpleWay(data1, data2){
  return _.flatten(_.zip(data1, data2));
}

console.log(zipListTheSimpleWay(list1, list2));