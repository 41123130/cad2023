var tipuesearch = {"pages": [{'title': '關於倉儲', 'text': '倉儲網址 \n https://s1511.cycu.org:8141  (動態網址) \n https://41123130.github.io/cad2023 \xa0(靜態網址) \n https://s1511.cycu.org:8141 \xa0(S1511動態) \n https://s.cycu.org/~cad41123130/cad2023 \xa0\xa0(S1511靜態) \n 以太坊 \xa0 \n IPV6位置 [2001:288:6004:17:2023:cada::32] \n', 'tags': '', 'url': '關於倉儲.html'}, {'title': '課程內容', 'text': '倉儲與網站評分項目: \n A: 是否 按照進度明確標示倉儲的改版歷程? \n 否，但我盡全力做 \n \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論? \n 大概知道一些內容，例如居家或無特別設定通常都是用IPV4，並且 ipv4的puttykey不需要設proxy\xa0 ，但當經過特別設定或修改後能改成IPV6，內部有一些不同例如有些網頁只能從IPV6進， 綜合而言無論在IPv4還是IPv6環境中，都應該確保設定正確的IP地址 和 DNS伺服器。關於設定可看(課程內容->網路設定) \n \n \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作? \n 是，目前設定個人為(41123130/cad2023)和小組(41123130/cad2023_ag1) \n \n \n \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考? \n 否，我已經下載教育版Inventor，但忘記開錄影程式，只能提供照片證明 \n \n \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載? \n 是， 機械模型位置 \n \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim? 是 \n \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬? \n 我嘗試轉入模擬程式，但都失敗了，只好借鑒老師範例 \n \n \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬? \n 否，但正在尋找原因 \n \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬? \n 否，但已經完成設計圖並導入Coppeliasim \n \n \n \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載? \n 否 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬? \n 否 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答? \n 否 \n', 'tags': '', 'url': '課程內容.html'}, {'title': '網路設定', 'text': '1. 關Ipv4(防止盜版軟體侵害)並開啟Ipv6(s1511需要用到) \n 2. 輸入Ipv6的DNS(2001:288:6004:17::3) \n 3. 設定 IPv6 固定位址(2001:288:6004:17:2023:cada::32) \n \xa0 子網路首碼長度(64) \n \xa0 網路預設閘道 (2001:288:6004:17::254) \n 4.修改Proxy \n [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings]  ;  停用自動偵測 "AutoDetect"=dword:00000000  "MigrateProxy"=dword:00000001  ;  啟用代理 \n "ProxyEnable"=dword:00000001(在家不用ipv6，最後一位數1需要修改成0) "ProxyHttp1.1"=dword:00000000  "ProxyServer"="http://[2001:288:6004:17::4]:3128" "ProxyOverride"="localhost;192.168.1.0/24;<local>" \n \n', 'tags': '', 'url': '網路設定.html'}, {'title': 'W4', 'text': '1.建立上課用的倉儲 (Github) \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '1.建立考試帳號 (Exam) \n 網址:exam.cycu.org \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '1.電腦輔助設計室網路環境設置 (網路設定) \n 由於電腦輔助設計室某部分套件, 在 IPv4 網路環境下會被防毒軟體偵測到封包異常而封閉網路, 因此以下將 IPv4 網路關閉, 僅使用 IPv6, 並透過雙網路協定支援的代理主機設定, 以便與僅支援 IPv4 的網路主機連線. \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '2.\xa0 下載學校版 Inventor \n 3.\xa0 組隊繪畫永動機部分 (AG1) \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '學習維護網站的方法 \n 1. 使用Replit connect功能連結與Github的權限 \n 2. 自架主機s1511.cycu.org連結後找自己的分配埠號 (8141) \n 3. localhost透過token,SSH確定git推送權限後使用Putty維護 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '1. 下載CoppeliaSim \n 2. 嘗試在CoppeliaSim內導入零件檔(STL)，但失敗了 \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '1. 因學校電腦不支援外部DNS Server(台電DNS)，所以修改用機械設計系所建立的DNS伺服器 \n (140.130.17.3) 以及 ( 2001:288:6004:17::3) \n 2.\xa0嘗試在CoppeliaSim內導入零件檔(STL) \n \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': 'A流休息 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '1. 根據所分配的固定IPv6位址 進行設定 DNS伺服器 \n (2001:288:6004:17:2023:cada::32) \n 2. 因為上次學到網路設定，這次學到如何查詢 DNS server並實際嘗試 \n Windows 網路查詢指令: ipconfig /all \n DNS 伺服器查詢指令: nslookup \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '利用ChatGPT對話所完成的 2a座位排序程式 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Localhost', 'text': '在本地主機（localhost）上維護網站與在實際伺服器上維護網站有些許不同，因為 localhost 通常用於開發和測試。以下是在 localhost 上維護網站的一些建議步驟： \n 1.備份網站： 在進行任何更改之前，定期備份你的網站資料庫和相關檔案。這可確保在出現問題時能快速還原網站。 \n 2.環境配置： 檢查你的本地開發環境是否正確配置，包括伺服器（例如 Apache、Nginx）、資料庫（例如 MySQL、SQLite）、程式語言運行時（例如 PHP、Node.js）等。 \n 3.代碼版本控制： 如果你使用版本控制系統（如 Git），確保你的代碼庫是最新的，並在開發新功能或修復錯誤之前建立分支。 \n 4.更新依賴項： 確保你使用的所有軟體套件和庫都是最新版本。這包括網站的框架、程式庫和其他相依項目。 \n 5.測試： 在 localhost 上進行測試，驗證最新的代碼和依賴項是否能夠正確運作。這包括功能測試、單元測試和性能測試。 \n 6.資料庫管理： 如果你的網站使用資料庫，請確保資料庫結構與最新的代碼相容。執行可能的資料庫遷移（migrations）以更新結構。 \n 7.日誌檢查： 檢查伺服器和應用程式的日誌文件，以尋找錯誤訊息或潛在的問題。這對於追蹤錯誤和改進代碼效能很有幫助。 \n 8.安全性檢查： 驗證你的本地伺服器和應用程式是否有基本的安全性措施，例如防火牆、適當的訪問權限，以及是否使用了最新的安全性更新。 \n 9.瀏覽器測試： 在不同的瀏覽器中測試網站，確保它在各種環境下都能正確顯示和運作。 \n 10.效能優化： 檢查並優化你的代碼，以確保網站在本地主機上運作時具有良好的效能。 \n 11.清理不必要的檔案： 刪除不必要的臨時檔案、日誌和快取，以節省空間和提高效能。 \n 12.版本控制提交： 如果一切正常，將你的更改提交到版本控制系統中，這有助於追蹤代碼的變更歷史。 \n \n', 'tags': '', 'url': 'Localhost.html'}, {'title': 'Replit', 'text': '\n', 'tags': '', 'url': 'Replit.html'}, {'title': 'WINK', 'text': '進入IPV6後找到WINK3 \n \n 打開後開啟exe檔案 \n \n 之後開新專案開始作業 \n \n', 'tags': '', 'url': 'WINK.html'}, {'title': '機械設計（永動機）', 'text': '目標:蓋出永動機模擬型 \n 步驟: 1.以繪圖軟體繪製網路上參考之外型 \n \xa0 \xa0 \xa0 \xa0 \xa0 2.將繪製好之零件外型導入模擬軟體 \n \xa0 \xa0 \xa0 \xa0 \xa0 3.修改內部失敗原因 \n \xa0 \xa0 \xa0 \xa0 \xa0 4.完成模擬 \n', 'tags': '', 'url': '機械設計（永動機）.html'}, {'title': '機械組合圖', 'text': 'Invertor圖檔 \n \n \n 導入CoppeliaSim後樣子 \n \n', 'tags': '', 'url': '機械組合圖.html'}, {'title': '環形圖', 'text': '\n 導入CoppeliaSim後樣子 \n \n', 'tags': '', 'url': '環形圖.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言） \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python 的非正式介紹 \n 縮排（Python 採用 4 個 Spaces 縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字符串 （字串） \n print (Python 內建函數,  print() 函式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 打開 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息 \n 經過 \n 類別 \n 此頁面示範如何在同一頁面下納入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動 Brython 時，設定會將 .py 檔案放入 downloads/py 目錄中引用。 \n 也即將所有對應的 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時透過 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</腳本> \n 從1累加到100： \n 1 加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理在此頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束  \n \n  ##########################################  \n 從1累加到100第2部分： \n 1 加到100 cango_三_齒輪 BS蛇 人工智慧俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};