function reflexAgent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}
function countState(states, count) {
    let third = states[0] == "A" ? 0 : 1;
    let second = states[1] == "DIRTY" ? 0 : 1;
    let first = states[2] == "DIRTY" ? 0 : 1;
    console.log(third, second, first);
    let newState = first * (1) + second * (2) + third * (4);
    console.log(newState);
    let inserted = false;
    for (let i = 0; (i < count.length && !inserted); i++) {
        if(count[i] == newState) inserted = true;
    }
    if (!inserted) count.push(newState);
    return count.sort((a,b) => (a == b) ? 0 : (a < b) ? -1 : 1);
}
function test(states, count) {
    count = countState(states, count);
    document.getElementById("log").innerHTML += `<br>${count.toString()}`;
    if (count.length == 8) return;

    let location = states[0];
    let state = states[0] == "A" ? states[1] : states[2];
    let actionResult = reflexAgent(location, state);

    if (actionResult == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (actionResult == "RIGHT") states[0] = "B";
    else if (actionResult == "LEFT") states[0] = "A";
    setTimeout(function(){ test(states, count); }, 2000);
}
var states = ["A", "DIRTY", "DIRTY"];
var verifyState = [];
test(states, verifyState);