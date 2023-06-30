
    // カード要素をすべて取得します
    const cards = document.querySelectorAll(".card");

    // 各カードにクリックイベントリスナーを追加します
    cards.forEach(card => {
      card.addEventListener("click", () => {
        // カードのdata-name属性から場所の名前を取得します
        const placeName = card.getAttribute("data-name");
        
        // マップのサイトに遷移するURLを生成します
        const mapUrl = `file:///C:/Users/y1810/OneDrive/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97/%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E%E5%AE%9F%E7%BF%92/HTML_%E8%AA%B2%E9%A1%8C/%E8%A6%B3%E5%85%89%E5%9C%B0%E3%83%9E%E3%83%83%E3%83%97.HTML??search=${encodeURIComponent(placeName)}`;

        // 新しいタブでマップのサイトを開きます
        window.open(mapUrl, "_blank");
      });
    });
