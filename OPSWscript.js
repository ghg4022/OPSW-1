function CreateMemo() {
  var nameInput = document.getElementById("NameAdd");
  var memoInput = document.getElementById("MemoAdd");

  var name = nameInput.value.trim();
  var memo = memoInput.value.trim();

  if (!name || !memo) {
    alert("이름과 내용을 입력해주세요.");
    return;
  }

  var memoElement = document.createElement("div");
  memoElement.className = "memo";
  memoElement.textContent = `${name}: ${memo}`;

  document.getElementById("memoList").appendChild(memoElement);

  nameInput.value = "";
  memoInput.value = "";
}