var tipuesearch = {"pages": [{'title': '關於', 'text': 'https://github.com/41123130/cad2023 \n https://41123130.github.io/cad2023 \n https://s.cycu.org/~cad41123130/cad2023 \xa0 \n 以太坊 \xa0 \n IPV6位置 [2001:288:6004:17:2023:cada::32] \n', 'tags': '', 'url': '關於.html'}, {'title': '布萊頓', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言） \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python 的非正式介紹 \n 縮排（Python 採用 4 個 Spaces 縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字符串 （字串） \n print (Python 內建函數,  print() 函式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 打開 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息 \n 經過 \n 類別 \n 此頁面示範如何在同一頁面下納入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動 Brython 時，設定會將 .py 檔案放入 downloads/py 目錄中引用。 \n 也即將所有對應的 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時透過 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</腳本> \n 從1累加到100： \n 1 加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理在此頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1 加到100 cango_三_齒輪 BS蛇 人工智慧俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': '布萊頓.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': '網路設定', 'text': '1.關Ipv4(防止盜版軟體侵害)並開啟Ipv6(s1511需要用到) \n 2.輸入Ipv6的DNS(2001:288:6004:17::3) \n 3.設定 IPv6 固定位址(2001:288:6004:17:2023:cada::32) \n \xa0 子網路首碼長度(64) \n \xa0 網路預設閘道 (2001:288:6004:17::254) \n 4.修改Proxy \n [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings]  ;  停用自動偵測 "AutoDetect"=dword:00000000  "MigrateProxy"=dword:00000001  ;  啟用代理 \n "ProxyEnable"=dword:00000001(在家不用ipv6，最後一位數1需要修改成0) "ProxyHttp1.1"=dword:00000000  "ProxyServer"="http://[2001:288:6004:17::4]:3128" "ProxyOverride"="localhost;192.168.1.0/24;<local>" \n \n', 'tags': '', 'url': '網路設定.html'}, {'title': 'W4~W5', 'text': '1.建立上課用的倉儲 (Github) \n 2.建立考試帳號 (Exam) \n \n', 'tags': '', 'url': 'W4~W5.html'}, {'title': 'W6~W7', 'text': '1.電腦輔助設計室網路環境設置 (網路設定) \n 2. 組隊繪畫永動機部分 (AG1) \n 3.下載學校 版 Inventor \n', 'tags': '', 'url': 'W6~W7.html'}, {'title': 'W8', 'text': '學習維護網站的方法 \n 1.使用Replit connect功能連結與Github的權限 \n 2.自架主機s1511.cycu.org連結後找自己的分配埠號(8141) \n 3.localhost透過token,SSH確定git推送權限後使用Putty維護 \n', 'tags': '', 'url': 'W8.html'}, {'title': '機械設計（永動機）', 'text': '目標:蓋出永動機模擬型 \n 步驟: 1.以繪圖軟體繪製網路上參考之外型 \n \xa0 \xa0 \xa0 \xa0 \xa0 2.將繪製好之零件外型導入模擬軟體 \n \xa0 \xa0 \xa0 \xa0 \xa0 3.修改內部失敗原因 \n \xa0 \xa0 \xa0 \xa0 \xa0 4.完成模擬 \n', 'tags': '', 'url': '機械設計（永動機）.html'}, {'title': '機械組合圖', 'text': '\n', 'tags': '', 'url': '機械組合圖.html'}, {'title': '環形圖', 'text': '\n \n \n', 'tags': '', 'url': '環形圖.html'}]};