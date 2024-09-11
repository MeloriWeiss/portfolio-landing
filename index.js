class App {
    constructor() {
        this.findElements();
        this.initElements();
    }

    findElements() {
        this.homeElement = document.getElementById('home');
        this.aboutElement = document.getElementById('about');
        this.techStackElement = document.getElementById('tech-stack');
        this.projectsElement = document.getElementById('projects');
        this.contactElement = document.getElementById('contact');
    }

    initElements() {
        const that = this;
        Array.from(document.getElementsByClassName('scroll-to-home')).forEach(button => button.addEventListener('click', function() {
            that.homeElement.scrollIntoView({behavior: "smooth"});
        }));
        Array.from(document.getElementsByClassName('scroll-to-about')).forEach(button => button.addEventListener('click', function() {
            that.aboutElement.scrollIntoView({behavior: "smooth"});
        }));
        Array.from(document.getElementsByClassName('scroll-to-tech-stack')).forEach(button => button.addEventListener('click', function() {
            that.techStackElement.scrollIntoView({behavior: "smooth"});
        }));
        Array.from(document.getElementsByClassName('scroll-to-projects')).forEach(button => button.addEventListener('click', function() {
            that.projectsElement.scrollIntoView({behavior: "smooth"});
        }));
        Array.from(document.getElementsByClassName('scroll-to-contact')).forEach(button => button.addEventListener('click', function() {
            that.contactElement.scrollIntoView({behavior: "smooth"});
        }));
    }
}
(new App());