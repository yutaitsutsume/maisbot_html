function copyToClipboard(text) {
    // 1. クリップボードに書き込む（ブラウザの標準機能を使う）
    navigator.clipboard.writeText(text).then(() => {
        // 2. 成功したらユーザーに知らせる
        alert("コピーしました: " + text);
    });
}
