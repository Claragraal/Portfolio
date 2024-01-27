let isDeveloper = false;

function toggleRole() {
    const switchButton = document.querySelector('.switch-button');
    const roleText = document.getElementById('role-text');
    const aboutMeText = document.querySelector('.about-section .about-content p');
    const portfolioText = document.querySelector('.portfolio-section p');
    const experienceItems = document.querySelectorAll('.experience-item p');
    const aboutImagesContainer = document.querySelector('.about-images');
    const experienceImagesContainer = document.querySelectorAll('.experience-item img');
    const portfolioImagesContainer = document.querySelector('.portfolio-images');
    const body = document.body;
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if (isDeveloper) {
        // If currently a developer, switch to artist
        body.classList.remove('developer-mode');
        header.classList.remove('developer-mode');
        footer.classList.remove('developer-mode');
        switchButton.style.backgroundColor = 'rgb(131, 164, 234)';
        roleText.textContent = 'Artist';
        aboutMeText.innerHTML = "I'm Clara, an 18 years old French pixel artist/3D model artist. I'm passionate about drawing and video games, so I've merged both by creating pixel art game assets!<br><br>";

        aboutMeText.innerHTML += "I started drawing when I was a kid, and quickly got into digital art. At some point, while playing Minecraft, I got into a server staff team while they were making a custom texture pack: That's when I got into pixel art!<br><br>Since then, I worked for a bunch of Minecraft servers and for indie games through Fiverr, BuiltByBit, or simply Discord!";
        portfolioText.textContent = "Explore some of my pixel art works in the portfolio below!";

        experienceItems[0].innerHTML = "<b>Etherion Online - 2023:</b> Was part of the Graphics Team of Etherion Online, a small indie RPG on mobile and Steam, where I would make items for their seasonal battle pass and special events.<br><br>";
        experienceItems[1].innerHTML = "<b>Mythonia - 2019/2021:</b> I worked as a pixel artist under contract for Mythonia, an innovative Minecraft server which included a custom texture pack with pixel art textures and 3D models, being fully functional in Minecraft 1.8.<br><br>";
        experienceItems[2].innerHTML = "<b>GraalonlineZone - 2018/2019:</b> I was part of the Graphics Team of GraalonlineZone, a small mobile social RPG, where I would make cosmetics, weapons and other assets for holidays or special events.<br><br>";
        aboutImagesContainer.innerHTML = `
            <img src="img/gem1.png" alt="Image 1">
            <img src="img/gem2.png" alt="Image 2">
            <img src="img/gem3.png" alt="Image 3">
        `;
        
        experienceImagesContainer[0].src = "img/logo3.png";
        experienceImagesContainer[1].src = "img/logo1.png";
        experienceImagesContainer[2].src = "img/logo2.png";

        portfolioImagesContainer.innerHTML = `
            <img src="img/16.png" alt="Big Image 1">
            <img src="img/32.png" alt="Big Image 2">
            <img src="img/64.png" alt="Big Image 3">
            <img src="img/gui.png" alt="Big Image 4">
            <img src="img/art.png" alt="Big Image 5">
            <img src="img/oth.png" alt="Big Image 6">
            <img src="img/pfp.png" alt="Big Image 7">
            <img src="img/tags.png" alt="Big Image 8">
        `;
        body.style.color = 'white';
    } else {
        // If currently an artist, switch to developer
        body.classList.add('developer-mode');
        header.classList.add('developer-mode');
        footer.classList.add('developer-mode');
        switchButton.style.backgroundColor = 'rgb(255, 145, 90)';
        roleText.textContent = 'Developer';
        aboutMeText.innerHTML = "I'm Clara, a French 18-year-old developer, still studying and learning as I'm writing this! I've always been passionate about video games, so I hope to become a game developer one day!<br><br>";

        aboutMeText.innerHTML += "I started development in late middle school/early high school, with small projects on Scratch and Minecraft plugins. I slowly got interested in it, and decided to learn how to use Unity and how to create video games. I never properly finished a project; my expectations are too high, and I'm never satisfied with the end product if I don't have a budget for it.";

        portfolioText.textContent = "Explore some of my projects, including school SAE (learning projects)!";

        experienceItems[0].innerHTML = "Web development: HTML/Flask";
        experienceItems[1].innerHTML = "Web design: CSS/Tailwind/Bootstrap";
        experienceItems[2].innerHTML = "Programming languages: Java/Python/C/C#";

        aboutImagesContainer.innerHTML = `
            <img src="img/t1.png" alt="Image 1">
            <img src="img/t2.png" alt="Image 2">
            <img src="img/t3.png" alt="Image 3">
        `;

        experienceImagesContainer[0].src = "img/dev.png";
        experienceImagesContainer[1].src = "img/artdev.png";
        experienceImagesContainer[2].src = "img/app.png";

        portfolioImagesContainer.innerHTML = `
        <a href="https://claragraal.github.io/SAES1_Ankama/"><img src="img/ankama.png" alt="Big Image 1"></a>
        <a href="https://github.com/ValentinV-J/SAE.01-02"><img src="img/doosok.png" alt="Big Image 1"></a>
        `;

        body.style.color = 'white';
    }

    isDeveloper = !isDeveloper;
}

const switchButton = document.querySelector('.switch-button');
switchButton.addEventListener('click', toggleRole);

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
