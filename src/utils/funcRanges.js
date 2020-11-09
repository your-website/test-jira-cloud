// find the values of points on the chart
const funcRanges = (data) =>
  data.map((ele) => {
    let firstRange = null;
    let finalRange = null;
    for (let i = 0; i < ele.ranges.length; i++) {
      // if the value of the array is greater than the next one,
      // then we add these values ​​and divide by 2,
      // thereby we find the first point on the chart
      if (i === 0 && ele.ranges[i] > ele.ranges[i + 1]) {
        let sum = ele.ranges[i] + ele.ranges[i + 1];
        let currentRange = sum / 2;

        // find the remainder to add it to the final value
        let remainder = ele.ranges[i] - currentRange;

        finalRange += remainder;
        firstRange = currentRange;
      }

      // find the end point by summing all the elements of the array
      finalRange += ele.ranges[i];
    }

    firstRange = firstRange === null ? ele.ranges[0] + ele.ranges[1] : firstRange;
    return [firstRange, finalRange];
  });

export default funcRanges;
