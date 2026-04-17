const servicesGrid = document.getElementById("servicesGrid");
services.forEach(item => {
  servicesGrid.innerHTML += `
    <div class="card">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
});

const workGrid = document.getElementById("workGrid");
works.forEach(item => {
  workGrid.innerHTML += `
    <div class="card">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});
