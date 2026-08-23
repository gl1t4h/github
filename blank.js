<script>
const VALID_KEY = "lebron1212";

function showLogin() {
  document.getElementById("key-login").style.display = "block";
}

function checkKey() {
  const input = document.getElementById("accessKeyInput").value;
  if (input === VALID_KEY) {
    localStorage.setItem("loggedIn", "true");
    location.reload();
  } else {
    document.getElementById("keyError").style.display = "block";
  }
}

window.onload = () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    showLogin();
  }
};
</script>
