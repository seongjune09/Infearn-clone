
const courseList = document.getElementById("course-list");

data.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";

  card.innerHTML = `
    <img src="${course.img}" alt="${course.title}">
    <div class="course-info">
      <div class="course-title">${course.title}</div>
      <div class="course-teacher">${course.teacher}</div>
      <div class="course-price">${course.price.final.toLocaleString()}원</div>
      ${course.rating ? `<div class="course-rating"><img src = "../assets/Star.svg" style = "width :15px;"> ${course.rating.score} (${course.rating.count})</div>` : ""}
    </div>
  `;

  courseList.appendChild(card);
});