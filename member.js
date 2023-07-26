function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "React", "Angular", "Vue"]
    };
    console.log(member.name + " has " + member.skills.length + " skills: " + member.skills.join(", "));
}
