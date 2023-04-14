/**
 * Funkcja getHigherGradeCourse przyjmuje dwa obiekty kursu i zwraca obiekt kursu z wyższą średnią oceną. 
 * Wewnątrz funkcji używamy metody reduce do obliczenia średniej oceny dla każdego z kursów. 
 */
function getHigherGradeCourse(course1, course2) {
    const avg1 = course1.grade.reduce((a, b) => a + b) / course1.grade.length;
    const avg2 = course2.grade.reduce((a, b) => a + b) / course2.grade.length;
    return avg1 > avg2 ? course1 : course2;
}

const course1 = {
    name: 'Math',
    grade: [4, 3, 5, 4],
};

const course2 = {
    name: 'Science',
    grade: [5, 4, 4, 3],
};

console.log(getHigherGradeCourse(course1, course2).name);
