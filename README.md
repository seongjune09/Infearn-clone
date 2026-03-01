# 🍃 Inflearn 클론 코딩
<img width="2914" height="1620" alt="image" src="https://github.com/user-attachments/assets/264054fa-f6b0-4259-9ef4-92bb485a613f" />


📅 2025.08.04 ~ 2025.08.07


Inflearn(인프런) 클론 코딩 | 여름 방학 멘토링 프로젝트

HTML/CSS/JavaScript를 활용하여 프론트엔드 퍼블리싱을 구현했으며, 

이전 번개장터 프로젝트보다 더 복잡한 레이아웃과 데이터 구조를 다루며 역량을 향상시켰습니다.

---

# 기술적 구현

## (1) 동적 콘텐츠 렌더링

- 재사용 가능한 함수 구조로 강의 목록 렌더링
- forEach 메서드를 활용한 배열 순회

```js
javascript// 강의 카드를 동적으로 생성하는 함수
function renderCourses(container, courses) {
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.teacher}</p>
      <p class="price">${course.price.toLocaleString()}원</p>
      <p class="rating">⭐ ${course.rating}</p>
    `;
    container.appendChild(card);
  });
}
```

---

## (2) 데이터 분리 구조

- 강의 데이터를 별도 파일로 분리하여 관리성 향상
- data.js: 첫 번째 섹션 강의 목록 (8개)
- data2.js: 두 번째 섹션 강의 목록 (8개)

```js
javascript// data.js
const courses = [
  { 
    id: 1, 
    title: '강의 제목', 
    teacher: '강사명',
    price: 10000, 
    rating: 4.5,
    img: 'img1.jpg' 
  },
  // ...
];
```

---

## (3) 강의 카드 UI 구현

- 이미지, 제목, 강사, 가격, 평점을 포함한 카드 레이아웃
CSS Grid/Flexbox를 활용한 반응형 레이아웃
섹션별 강의 목록 구성

---

# ‼️ 트러블 슈팅
**문제 상황**

- 여러 개의 강의 정보를 화면에 일렬로 나열해야 하는 상황
- 각 강의마다 HTML을 반복해서 작성하면 코드가 길어지고 중복이 발생
- 강의 정보 수정 시 여러 곳을 일일이 찾아 수정해야 하는 비효율성
- 코드 가독성이 떨어지고 유지보수가 어려움

**해결 방법**

- 배열 자료구조를 활용한 데이터 관리
- 반복문(forEach)을 통한 동적 렌더링으로 코드 중복 제거
- 강의 추가/수정 시 배열만 수정하면 되는 구조 구현

```js
javascript// 배열을 활용한 데이터 관리
const courses = [
  { id: 1, title: '강의1', price: 10000, image: 'img1.jpg' },
  { id: 2, title: '강의2', price: 20000, image: 'img2.jpg' },
  // ...
];
```

---

# 🍀 느낀 점 및 배운 점
이번 인프런 클론 코딩을 통해 CSS와 JavaScript를 활용하며 언어 활용 능력을 향상시킬 수 있었습니다.
특히 프로그래밍 수업 시간에 배운 배열 자료구조를 웹 개발에 직접 적용해보며, 데이터 관리의 중요성과 효율성을 체감했습니다.
앞으로의 프로젝트에서도 이러한 패턴을 적극 활용할 수 있는 기반을 마련했습니다.<br>
이전 번개장터 프로젝트보다 복잡한 구조를 다루며 역량이 한 단계 성장하는 계기가 되었습니다.

---

# 기술 스택

<img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg" /><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg" /><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />

---

# [▶ 시연 영상 확인하기](https://www.youtube.com/watch?v=M9ORCKMrlOA)
