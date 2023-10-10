export class TabUtility {
    static selectedTab:HTMLHeadingElement|null = null;

    static initTabs():void {
        // setup tab-toggling
        document.querySelectorAll("#Tabs h2").forEach(tab => tab.addEventListener("click", TabUtility.selectTab));
        // click the first tab to enable everything
        document.querySelector("#Tabs h2").click();
    }

    static selectTab(event):void {
        const tab:HTMLHeadingElement = event.target;
        // only accept click, if tab isn't selected
        if (!tab.classList.contains("selected")) {
            // unselect last tab - if any
            if (TabUtility.selectedTab) {
                TabUtility.selectedTab.classList.remove("selected");
                document.querySelector(`#${TabUtility.selectedTab.dataset.tabShow}`).classList.add("hide");
            }
            // select this tab
            tab.classList.add("selected");
            document.querySelector(`#${tab.dataset.tabShow}`).classList.remove("hide");
            // remember the selected tab
            TabUtility.selectedTab = tab;
        }
    }
}