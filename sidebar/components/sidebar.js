export const setUpSidebar = (sidebarParent, toggleParent) => {
  let showSidebar = false;

  function Sidebar() {
    sidebarParent.innerHTML = showSidebar
      ? `
      <div class="sidebar">
            <h1>hello sidebar</h1>
        </div>
            `
      : "";
  }

  function handleToggle() {
    showSidebar = !showSidebar;
    Sidebar();
  }

  toggleParent.addEventListener("click", handleToggle);

  Sidebar();
};
