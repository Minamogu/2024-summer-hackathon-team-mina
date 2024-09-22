
// 商品データ
const goodsLists = [
    {
        goodsName: 'Apple Airpods (第3世代)', //商品名
        goodsImg: '../img/airpods.jpg', //商品画像 
        goodsSeller: 'Apple', //販売者
        goodsPrice: 23000, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 31415, //レビュー数
        goodsDetails: 'Allpeの最新イヤホン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'KIWI design Quest 3用 バッテリーヘッドストラップ 6400mAh 人間工学デザイン ソフトクッション メタクエスト3 対応アクセサリー', //商品名
        goodsImg: '../image/vr.png', //商品画像 
        goodsSeller: 'KIWI design', //販売者
        goodsPrice: 8999, //価格
        starNumber: '../image/star4half.png', //星の数
        reviewNumber: 860, //レビュー数
        goodsDetails: '快適　バッテリーヘッドストラップ', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Meta Quest 3 Quest 2 共通 Linkケーブル', //商品名
        goodsImg: '../image/kable2.png', //商品画像 
        goodsSeller: 'Meta', //販売者
        goodsPrice: 10780, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 10188, //レビュー数
        goodsDetails: '最新型VR', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'ベースフード ベースブレッド 5種（プレーン・チョコ・メープル・シナモン・カレー） 20袋 置き換えダイエット ダイエット ダイエット食品 完全栄養食 完全食 BASE FOOD BASE BREAD', //商品名
        goodsImg: '../image/base.png', //商品画像 
        goodsSeller: 'ベースフード', //販売者
        goodsPrice: 6500, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 2119, //レビュー数
        goodsDetails: '完全栄養食の低糖質パン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Mauknci USBファン 12cm 2台1組 2連USBファン 静音 5V 3段階風量調整 PS4など用 冷却ファン ノートパソコン対応)', //商品名
        goodsImg: '../image/fan.png', //商品画像 
        goodsSeller: 'Mauknci', //販売者
        goodsPrice: 1430, //価格
        starNumber: '../image/star4half.png', //星の数
        reviewNumber: 1132, //レビュー数
        goodsDetails: 'ノートパソコン対応　冷却ファン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Apple Airpods (第3世代)', //商品名
        goodsImg: '../img/airpods.jpg', //商品画像 
        goodsSeller: 'Apple', //販売者
        goodsPrice: 23000, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 31415, //レビュー数
        goodsDetails: 'Allpeの最新イヤホン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'KIWI design Quest 3用 バッテリーヘッドストラップ 6400mAh 人間工学デザイン ソフトクッション メタクエスト3 対応アクセサリー', //商品名
        goodsImg: '../image/vr.png', //商品画像 
        goodsSeller: 'KIWI design', //販売者
        goodsPrice: 8999, //価格
        starNumber: '../image/star4half.png', //星の数
        reviewNumber: 860, //レビュー数
        goodsDetails: '快適　バッテリーヘッドストラップ', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Meta Quest 3 Quest 2 共通 Linkケーブル', //商品名
        goodsImg: '../image/kable2.png', //商品画像 
        goodsSeller: 'Meta', //販売者
        goodsPrice: 10780, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 10188, //レビュー数
        goodsDetails: '最新型VR', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'ベースフード ベースブレッド 5種（プレーン・チョコ・メープル・シナモン・カレー） 20袋 置き換えダイエット ダイエット ダイエット食品 完全栄養食 完全食 BASE FOOD BASE BREAD', //商品名
        goodsImg: '../image/base.png', //商品画像 
        goodsSeller: 'ベースフード', //販売者
        goodsPrice: 6500, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 2119, //レビュー数
        goodsDetails: '完全栄養食の低糖質パン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Mauknci USBファン 12cm 2台1組 2連USBファン 静音 5V 3段階風量調整 PS4など用 冷却ファン ノートパソコン対応)', //商品名
        goodsImg: '../image/fan.png', //商品画像 
        goodsSeller: 'Mauknci', //販売者
        goodsPrice: 1430, //価格
        starNumber: '../image/star4half.png', //星の数
        reviewNumber: 1132, //レビュー数
        goodsDetails: 'ノートパソコン対応　冷却ファン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Apple Airpods (第3世代)', //商品名
        goodsImg: '../img/airpods.jpg', //商品画像 
        goodsSeller: 'Apple', //販売者
        goodsPrice: 23000, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 31415, //レビュー数
        goodsDetails: 'Allpeの最新イヤホン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'KIWI design Quest 3用 バッテリーヘッドストラップ 6400mAh 人間工学デザイン ソフトクッション メタクエスト3 対応アクセサリー', //商品名
        goodsImg: '../image/vr.png', //商品画像 
        goodsSeller: 'KIWI design', //販売者
        goodsPrice: 8999, //価格
        starNumber: '../image/star4half.png', //星の数
        reviewNumber: 860, //レビュー数
        goodsDetails: '快適　バッテリーヘッドストラップ', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Meta Quest 3 Quest 2 共通 Linkケーブル', //商品名
        goodsImg: '../image/kable2.png', //商品画像 
        goodsSeller: 'Meta', //販売者
        goodsPrice: 10780, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 10188, //レビュー数
        goodsDetails: '最新型VR', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'ベースフード ベースブレッド 5種（プレーン・チョコ・メープル・シナモン・カレー） 20袋 置き換えダイエット ダイエット ダイエット食品 完全栄養食 完全食 BASE FOOD BASE BREAD', //商品名
        goodsImg: '../image/base.png', //商品画像 
        goodsSeller: 'ベースフード', //販売者
        goodsPrice: 6500, //価格
        starNumber: '../image/star4.png', //星の数
        reviewNumber: 2119, //レビュー数
        goodsDetails: '完全栄養食の低糖質パン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
    {
        goodsName: 'Mauknci USBファン 12cm 2台1組 2連USBファン 静音 5V 3段階風量調整 PS4など用 冷却ファン ノートパソコン対応)', //商品名
        goodsImg: '../image/fan.png', //商品画像 
        goodsSeller: 'Mauknci', //販売者
        goodsPrice: 1430, //価格
        starNumber: '../image/star4half.png', //星の数
        reviewNumber: 1132, //レビュー数
        goodsDetails: 'ノートパソコン対応　冷却ファン', //商品詳細
        goodsLink: "../cart/index.html", //商品画面のリンク
    },
];


// // 検索結果一覧表示
// const searchResults = document.querySelector('#goods');
// if (stories !== null) { 
//     for (let i = 0; i < 4; i++) {
//         const { storyLink, img, listTitle } = lists[i];
//         const imgTag = img ? `<img src="${img}" alt="${listTitle}" class="photo">` : ''; // imgがある場合のみimgタグを作成
//         const content = 
//         `<a href="${storyLink}" class="story">
//             <div class="story-icon">
//             <div class="story-icon-photo">
//                 ${imgTag}
//             </div>
//             </div>
//             <div class="story-name limited-text">
//                 ${listTitle}
//             </div>
//         </a>`;
//         stories.insertAdjacentHTML('beforeend', content);
//     }
// }

// 検索結果の一覧を表示
function generateCustomGoodsList(goodsLists) {
    const goodsContainer = document.querySelector('#goods');
    if (goodsContainer !== null) {
        for (const goods of goodsLists) {
            const content = `
                <a href="${goods.goodsLink || '../goods/index.html'}" class="p-goodsLink">
                    <div class="p-goods__card">
                        <div>
                            <img src="${goods.goodsImg || ''}" alt="${goods.goodsName || ''}"> 
                        </div>
                        <p>
                            ${goods.goodsName || ''}
                        </p>
                        <img src="${goods.starNumber || ''}" alt="${goods.starNumber || ''}"> 
                        <span class="money">${goods.goodsPrice ? goods.goodsPrice.toLocaleString() : ''}</span>
                        <div>
                            <img src="../img/Shopping Cart Icon.svg">
                            <span class="putInCart">
                                カートに入れる
                            </span>
                        </div>
                    </div>
                </a>
            `;
            
            goodsContainer.insertAdjacentHTML('beforeend', content);
        }
    }
}

// 関数を呼び出して商品リストを生成
generateCustomGoodsList(goodsLists);






//検索欄
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleSubmit();
});

function handleSubmit() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const specialWord = 'airpods'; // 特定の単語を'AirPods'に設定（小文字で比較）
    const specialPage = '../result/index.html'; // 特別なページへの相対パス
    const defaultPage = '../notFounded/index.html'; // デフォルトページへの相対パス

    // デバッグ情報を表示
    const debugInfo = document.getElementById('debug-info');
    debugInfo.innerHTML = `入力: ${input}<br>特別な単語: ${specialWord}<br>条件: ${input === specialWord}`;

    if (input === specialWord) {
        debugInfo.innerHTML += `<br>遷移先: ${specialPage}`;
        window.location.href = specialPage;
    } else {
        const destination = defaultPage + '?q=' + encodeURIComponent(input);
        debugInfo.innerHTML += `<br>遷移先: ${destination}`;
        window.location.href = destination;
    }
}


const shippingCost = 520;
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');

// 商品合計を計算する関数
function calculateTotal() {
    let subtotal = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseInt(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.cart-item-quantity').value);
        subtotal += price * quantity;
    });
    subtotalElement.textContent = `¥${subtotal.toLocaleString()}`;
    totalElement.textContent = `¥${(subtotal + shippingCost).toLocaleString()}`;
}

// 数量変更イベントリスナー
document.querySelectorAll('.cart-item-quantity').forEach(select => {
    select.addEventListener('change', calculateTotal);
});

// 削除ボタンイベントリスナー
document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', function() {
        const item = button.closest('.cart-item');
        item.remove();
        calculateTotal();
    });
});

// 初回合計の計算
calculateTotal();

//カートの個数増やす
// let cartNumber = 0;
// const cartCountDisplay = document.getElementById('goods');
// const putInCartElems = document.querySelectorAll('.putInCart');
// const productLinks = document.querySelectorAll('.product-link');

// function updateCount(event) {
//     event.preventDefault(); // デフォルトのリンク動作を防ぐ
//     event.stopPropagation(); // イベントの伝播を止める
//     cartNumber++;
//     cartCountDisplay.textContent = `カート内の商品数: ${cartNumber}`;
// }

// putInCartElems.forEach(element => {
//     element.addEventListener('click', updateCount);
// });

// // 商品リンクのクリックイベントを処理
// productLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         // クリックされた要素が「カートに入れる」ボタンでない場合のみ遷移
//         if (!event.target.classList.contains('putInCart')) {
//             return true; // 通常のリンク動作を許可
//         }
//         event.preventDefault(); // それ以外の場合は遷移を防ぐ
//     });
// });
