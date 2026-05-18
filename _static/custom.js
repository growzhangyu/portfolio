document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a.external').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
// open links in new windows

document.addEventListener("DOMContentLoaded", function () {
    const pcContainer = document.querySelector(".content-icon-container");
    const mobileContainer = document.querySelector(".header-right");

    if (!pcContainer && !mobileContainer) return;

    // 创建 language switcher
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.style.display = "inline-flex";
    switcher.style.alignItems = "center";
    switcher.style.marginLeft = "8px";

    // 根据屏幕宽度设置文本
    function setSwitcherText(width) {
        if (width >= 768) { // PC 大屏
            switcher.innerHTML = '<a href="javascript:void(0)">English </a>|<a href="javascript:void(0)">中文(敬请期待)</a>';
        } else { // 小屏 / 手机
            switcher.innerHTML = '<a href="javascript:void(0)">English </a>|<a href="javascript:void(0)">中文(敬请期待)</a>';
        }
    }

    function updateSwitcher() {
        const width = window.innerWidth;
        setSwitcherText(width);

        if (width >= 768) { // PC
            if (pcContainer && !pcContainer.contains(switcher)) {
                pcContainer.appendChild(switcher);
            }
            if (mobileContainer && mobileContainer.contains(switcher)) {
                mobileContainer.removeChild(switcher);
            }
        } else { // 小屏
            if (mobileContainer && !mobileContainer.contains(switcher)) {
                mobileContainer.appendChild(switcher);
            }
            if (pcContainer && pcContainer.contains(switcher)) {
                pcContainer.removeChild(switcher);
            }
        }
    }

    updateSwitcher();
    window.addEventListener("resize", updateSwitcher);
});