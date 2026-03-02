// Typing animation
const typingText = "Secure Web Developer | Cybersecurity Enthusiast | PHP & MySQL Expert";
let i = 0;
function typeEffect() {
    if (i < typingText.length) {
        document.getElementById("typing").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}
if(document.getElementById("typing")) typeEffect();

// GitHub Live Projects Fetch
const projectContainer = document.getElementById("projects");
if(projectContainer){
fetch("https://api.github.com/users/yourusername/repos")
.then(res => res.json())
.then(data => {
    data.slice(0,6).forEach(repo => {
        projectContainer.innerHTML += `
            <div class="card">
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available"}</p>
                <a href="${repo.html_url}" target="_blank" class="btn">View Project</a>
            </div>
        `;
    });
});
}