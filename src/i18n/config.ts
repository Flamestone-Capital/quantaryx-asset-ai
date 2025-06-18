import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 直接导入翻译资源
const zhTranslations = {
  "navbar": {
    "brand": "QuantaryX",
    "products": "產品",
    "vision": "願景",
    "investors": "投資者",
    "contact": "聯繫我們",
    "requestDemo": "請求演示",
    "openMenu": "開啟選單",
    "closeMenu": "關閉選單"
  },
  "hero": {
    "title": "為智慧投資者打造的下一代資產管理平台",
    "subtitle": "專為高資產個人與專業投資者設計",
    "ctaButton": "開始免費試用",
    "learnMore": "了解更多",
    "features": {
      "smartAnalysis": {
        "title": "智慧資產分析",
        "description": "AI強化的資產淨值趨勢預測與風險識別"
      },
      "autoOptimization": {
        "title": "自動投資優化",
        "description": "基於市場行為的AI驅動投資策略調整"
      },
      "dataIntegration": {
        "title": "智能資料整合",
        "description": "多源財務數據自動解析與關聯構建"
      },
      "opportunityIdentification": {
        "title": "投資機會識別",
        "description": "AI篩選高價值投資標的與市場時機"
      }
    },
    "aiInsight": {
      "title": "AI 洞察",
      "performance": "基於您的歷史表現，建議在科技板塊增加",
      "allocation": "15%配置",
      "riskWarning": "當前市場波動性較高，建議謹慎操作"
    },
    "portfolioValue": "投資組合價值",
    "monthlyGrowth": "月增長率",
    "assetOverview": "資產總覽",
    "insights": {
      "smartAnalysis": "分析顯示您的資產在8月達到高峰，建議關注流動性分配以優化年底稅務籌劃。",
      "autoOptimization": "根據您的風險偏好與市場波動，AI推薦增加10%的防禦性資產以平衡投資組合。",
      "dataIntegration": "系統已自動整合12個金融機構的資料，並識別出3個重複計算的資產項目。"
    },
    "getAdvantage": "獲取優勢",
    "aiCapabilities": "AI 驅動能力",
    "charts": {
      "months": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      "assetTypes": {
        "stocks": "股票",
        "bonds": "債券",
        "realEstate": "不動產",
        "alternative": "另類投資",
        "cash": "現金"
      },
      "alternativeInvestments": {
        "privateEquity": "私募股權",
        "realEstateFunds": "房地產基金",
        "hedgeFunds": "對沖基金",
        "artCollections": "藝術品收藏",
        "commodityFutures": "商品期貨"
      },
      "tooltips": {
        "percentage": "占比",
        "realTimeValue": "即時淨值",
        "performance": "表現",
        "netValue": "淨值"
      }
    },
    "advancedFeatures": {
      "title": "QuantaryX 核心 AI 功能",
      "subtitle": "滑動卡片探索我們如何運用人工智能重新定義財富管理體驗",
      "wealthOverview": {
        "title": "財富總覽", 
        "description": "AI驅動的全方位財富儀表板",
        "details": "我們的AI系統自動連接並分析您所有的資產數據，包括銀行賬戶、投資組合、房地產、私募股權和加密貨幣，以創建一個綜合性的財富儀表板。",
        "capabilities": [
          "資產類別自動分類與標記",
          "跨機構資產整合與同步", 
          "AI異常檢測與風險警報",
          "預測性淨值變化趨勢分析"
        ],
        "uniqueFeature": "我們與其他平台的最大區別是能夠自動處理非結構化金融文件 - 從銀行報表到投資備忘錄，AI系統都能提取關鍵數據並建立關聯。",
        "aiInsight": "我們的AI能根據您的資產配置，預測未來12個月的現金流與流動性需求，確保您在需要資金時無需急售資產。"
      },
      "alternativeInvestments": {
        "title": "另類投資總覽",
        "description": "私募、房地產、藝術品智能追蹤", 
        "details": "QuantaryX的AI系統能夠追蹤、分析和評估傳統上難以量化的另類投資，包括私募股權、房地產、收藏品和藝術品。",
        "capabilities": [
          "非流動性資產估值AI模型",
          "私募投資表現追蹤引擎",
          "另類投資與公開市場相關性分析",
          "智能流動性預測與策略建議"
        ],
        "uniqueFeature": "市場上唯一一個能夠為非上市資產建立動態估值模型的平台，整合多種估值方法並持續根據新信息更新估值。",
        "aiInsight": "系統發現您的另類投資組合與特定經濟指標有85%的正相關性，可能會在經濟下行時遭受較大衝擊，建議增加對沖策略。"
      },
      "realTimeTracking": {
        "title": "實時跟踪",
        "description": "市場波動即時更新與AI分析",
        "details": "我們的AI系統不僅能實時追踪您的投資組合表現，還能智能分析市場波動對您資產的影響，並提供即時的見解和建議。",
        "capabilities": [
          "實時市場數據與組合影響分析",
          "新聞事件與資產關聯性AI檢測", 
          "投資組合實時風險評估",
          "情緒分析與市場趨勢預測"
        ],
        "uniqueFeature": "獨特的事件驅動監測系統，能夠識別新聞、社交媒體和市場數據中與您投資組合相關的信號，並計算可能的影響。",
        "aiInsight": "根據最新的市場數據和新聞分析，系統檢測到您持有的三檔科技股可能受到即將發布的監管政策影響，建議關注相關動態。"
      },
      "automatedTrading": {
        "title": "自動化交易",
        "description": "AI策略驅動的智能交易系統",
        "details": "QuantaryX的AI交易系統能根據您的風險偏好和投資目標，自動執行交易策略，包括再平衡、止損和策略性進出場。",
        "capabilities": [
          "智能再平衡與稅務優化交易",
          "動態止損/止盈策略執行",
          "多因子AI交易信號生成",
          "投資組合對沖自動調整"
        ],
        "uniqueFeature": "業界首創的稅務優化交易引擎，能夠在執行再平衡和調整時自動考慮稅務影響，最大化稅後收益。",
        "aiInsight": "系統分析顯示，採用AI自動化交易策略後，您的投資組合年化波動率降低了15%，同時保持了相近的收益率。"
      },
      "fullAi": {
        "title": "全AI體驗", 
        "description": "全方位AI助手為您管理財富",
        "details": "我們的AI財富助手能夠理解您的長期財務目標，並主動提供見解、建議和決策支持，讓財富管理變得前所未有的簡單和智能。",
        "capabilities": [
          "自然語言財務查詢系統",
          "智能決策推薦引擎",
          "跨資產類別關聯分析", 
          "個性化財富目標追踪與調整"
        ],
        "uniqueFeature": "突破性的AI財富助手能夠通過自然語言對話了解您的財務目標和喜好，並隨著時間推移學習您的決策模式，提供越來越個性化的建議。",
        "aiInsight": "基於您過去6個月的財務決策和目標設定，AI系統已建立了您的財務偏好模型，現在可以預測您對各類投資建議的接受程度達85%準確率。"
      }
    },
    "featureDetails": "功能詳情",
    "mainTitle": {
      "line1": "用人工智能",
      "line2": "重新定義資產掌控"
    },
    "description": "QuantaryX 整合AI深度學習、知識圖譜與自然語言處理技術，為高資產個人與專業投資者提供全方位的資產可視化、智能決策與自動化執行平台。"
  },
  "products": {
    "title": "四大產品矩陣",
    "subtitle": "QuantaryX 為高資產個人與專業投資者打造的完整解決方案",
    "finora": {
      "title": "Finora",
      "subtitle": "讓你第一次完整掌握自己的財務人生。",
      "description": "為個人投資者提供AI驅動的投資建議和自動化投資組合管理",
      "features": [
        "AI 財務大腦：為每筆交易、每個資產建立關聯圖譜",
        "自動解析財務文件：報表、轉帳紀錄自動整合",
        "財務狀況即時可視化：多維度淨值走勢與分析",
        "資產變動 AI 預警系統：主動告知風險或錯誤配置"
      ]
    },
    "wiselens": {
      "title": "Wiselens",
      "subtitle": "讓 AI 幫你組投資組合、幫你下單、還幫你換倉。",
      "description": "為機構投資者提供深度資產分析和市場洞察",
      "features": [
        "即時投資儀表板：基金表現、NAV 一眼看清",
        "AI ETF 組合推薦系統：根據畫像設計組合",
        "策略型自動交易引擎：支援訂投、止損、止盈",
        "一鍵下單 + API 串接券商/銀行：直接執行"
      ]
    },
    "nurocrm": {
      "title": "NuroCRM",
      "subtitle": "幫你記得每一個對話背後的意圖，預測下一步該說什麼。",
      "description": "為財務顧問提供智能客戶關係管理和投資追蹤",
      "features": [
        "語音/對話內容語意分析：識別情緒波動、偏好",
        "智能行動建議與產品配對：生成潛在推薦",
        "關係深度提醒系統：主動提醒適當跟進時機",
        "會前摘要 & 客戶個性報告自動生成"
      ]
    },
    "deallens": {
      "title": "DealLens",
      "subtitle": "你不需要再 manually 看 50 份 pitch deck，AI 幫你挑出值得關注的。",
      "description": "為交易員提供即時市場分析和交易信號",
      "features": [
        "自動抓取投資案源：從多渠道同步 PDF、Deck",
        "AI 摘要提煉與評級建議：提取關鍵資訊",
        "自動比對歷史案例：找出相似投資案例",
        "可操作的投資紀錄系統：完整節點管理"
      ]
    },
    "requestDemo": "請求產品演示",
    "popup": {
      "finoraDescription": "全方位的個人財務管理與資產分析平台",
      "comingSoon": "即將上線，敬請期待",
      "viewDemo": "查看演示",
      "joinWaitlist": "加入等候名單"
    }
  },
  "vision": {
    "title": "我們的願景",
    "subtitle": "改變金融科技的未來",
    "description": "QuantaryX 要做的，不是做一個好用的財務工具。我們要做的是一個讓未來的個人與機構能夠用 AI 認知資產、掌控財富、並擴張價值的操作平台。",
    "values": {
      "innovation": {
        "title": "認知資產",
        "description": "運用 AI 深度學習技術，將分散的財務數據整合為完整的資產全景，讓您真正理解資金流向與投資狀況。"
      },
      "security": {
        "title": "掌控財富",
        "description": "透過自動化策略執行與智能風險監控，讓您在複雜多變的市場中始終保持主動掌控，而非被動應對。"
      },
      "transparency": {
        "title": "擴張價值",
        "description": "藉由 AI 驅動的投資決策支持與市場機會識別，協助您在適當時機擴展投資組合，實現長期價值增長。"
      }
    }
  },
  "investors": {
    "title": "投資者關係",
    "subtitle": "與我們一起成長",
    "description": "QuantaryX正在尋求戰略投資夥伴，共同建設金融科技的未來",
    "opportunity": {
      "title": "投資機會",
      "description": "QuantaryX 正在尋求下一輪融資以加速產品開發與市場擴張。我們邀請有遠見的投資者成為重新定義資產管理未來的一部分。",
      "benefits": [
        "革命性 AI 資產管理技術，重新定義財富管理市場",
        "龐大高凈值個人與機構投資者客戶群體",
        "全面產品矩陣，完整覆蓋資產管理全流程",
        "高度可擴展的 SaaS 商業模式",
        "專業團隊融合 AI、金融與產品開發經驗"
      ],
      "investorPackage": "投資者資料包"
    },
    "marketOpportunity": {
      "title": "市場機會",
      "globalHNWI": "全球高凈值個人市場",
      "globalHNWIValue": "$80+ 兆美元",
      "familyOffice": "家族辦公室管理資產", 
      "familyOfficeValue": "$5.9+ 兆美元",
      "fintechGrowth": "金融科技年增長率",
      "fintechGrowthValue": "23.4%",
      "aiWealthManagement": "AI 財富管理市場潛力",
      "aiWealthManagementValue": "$4.2+ 兆美元"
    },
    "popup": {
      "title": "投資者資料",
      "comingSoon": "即將上線，敬請期待",
      "understood": "我知道了"
    },
    "stats": {
      "users": "活躍用戶",
      "assets": "管理資產",
      "growth": "年增長率",
      "satisfaction": "客戶滿意度"
    }
  },
  "footer": {
    "description": "為高資產個人與專業投資者提供全方位的資產可視化、智能決策與自動化執行平台。",
    "sections": {
      "products": "產品",
      "company": "公司",
      "contact": "聯繫我們"
    },
    "company": {
      "aboutUs": "關於我們",
      "team": "團隊",
      "investorRelations": "投資者關係"
    },
    "contact": {
      "email": "info@quantaryx.com",
      "phone": "+852 3757 9783",
      "emailLabel": "Email"
    },
    "legal": {
      "copyright": "版權所有。",
      "privacy": "隱私政策",
      "terms": "服務條款",
      "security": "安全性"
    }
  },
  "pages": {
    "notFound": {
      "title": "頁面未找到",
      "description": "抱歉，您訪問的頁面不存在。",
      "backHome": "返回首頁"
    },
    "privacyPolicy": {
      "title": "隱私政策",
      "subtitle": "QuantaryX 致力於保護您的隱私並確保您的個人信息安全。本政策說明我們如何收集、使用和保護您的信息。",
      "lastUpdated": "最後更新：{year}年{month}月{date}日",
      "backHome": "返回首頁",
      "sections": {
        "collection": {
          "title": "信息收集",
          "content": [
            "個人身份信息：姓名、電子郵件地址、電話號碼、通訊地址",
            "財務信息：投資組合數據、交易記錄、資產信息（在您明確授權下）",
            "技術信息：設備信息、IP地址、瀏覽器類型、使用統計",
            "身份驗證信息：用於驗證您身份的文件和數據"
          ]
        },
        "usage": {
          "title": "信息使用",
          "content": [
            "提供和改善我們的AI資產管理服務",
            "個性化投資建議和風險分析",
            "安全監控和欺詐防護",
            "客戶支持和技術維護",
            "法律合規和監管要求"
          ]
        },
        "protection": {
          "title": "數據保護",
          "content": [
            "端到端加密：所有敏感數據均採用銀行級加密技術",
            "訪問控制：嚴格的權限管理和多因素身份驗證",
            "定期安全審計：委託第三方安全公司進行滲透測試",
            "災備恢復：多地數據備份確保業務連續性",
            "員工培訓：所有員工需通過數據安全認證"
          ]
        },
        "sharing": {
          "title": "信息共享",
          "content": [
            "我們不會出售您的個人信息給第三方",
            "僅在獲得您明確同意下與合作金融機構共享必要信息",
            "遵循法律要求向監管機構提供信息",
            "與服務提供商共享技術和運營支持信息",
            "在公司重組時可能轉移數據（將提前通知用戶）"
          ]
        },
        "rights": {
          "title": "您的權利",
          "content": [
            "查看權：隨時查看我們收集的您的個人信息",
            "修正權：要求修正錯誤或不完整的信息",
            "刪除權：要求刪除您的個人數據（在法律允許範圍內）",
            "可攜權：以機器可讀格式獲取您的數據",
            "撤回同意：隨時撤回對數據處理的同意"
          ]
        },
        "updates": {
          "title": "政策更新",
          "content": [
            "我們可能會定期更新此隱私政策",
            "重要變更將提前30天通過電子郵件通知",
            "建議您定期查看最新版本",
            "繼續使用服務即表示接受更新後的政策"
          ]
        }
      },
      "contact": {
        "title": "聯繫我們",
        "description": "如果您對此隱私政策有任何疑問或想要行使您的權利，請通過以下方式聯繫我們：",
        "email": "privacy@quantaryx.com"
      }
    },
    "termsOfService": {
      "title": "服務條款",
      "subtitle": "這些條款管轄您對 QuantaryX 服務的使用。請仔細閱讀這些條款，因為它們包含重要的法律權利和義務。",
      "effectiveDate": "生效日期：{year}年{month}月{date}日",
      "backHome": "返回首頁",
      "importantNotice": {
        "title": "重要提醒",
        "content": "QuantaryX 提供的服務涉及金融投資，存在固有風險。我們強烈建議您在使用服務前仔細考慮您的財務狀況和風險承受能力。"
      },
      "sections": {
        "acceptance": {
          "title": "接受條款",
          "content": [
            "通過訪問或使用 QuantaryX 服務，您同意受本服務條款約束",
            "如果您不同意這些條款，請不要使用我們的服務",
            "我們可能會不時更新這些條款，更新後的條款將在發布後立即生效",
            "繼續使用服務表示您接受修訂後的條款"
          ]
        },
        "services": {
          "title": "服務描述",
          "content": [
            "QuantaryX 提供基於人工智能的資產管理和投資分析服務",
            "我們的服務包括但不限於：投資組合分析、風險評估、市場洞察、交易建議",
            "服務內容可能根據您的訂閱計劃而有所不同",
            "我們保留隨時修改、暫停或終止任何服務功能的權利"
          ]
        },
        "userObligations": {
          "title": "用戶義務",
          "content": [
            "您必須年滿18歲且具有完全民事行為能力",
            "提供真實、準確、完整的註冊信息",
            "保護您的賬戶安全，不得與他人共享登錄憑據",
            "遵守所有適用的法律法規和監管要求",
            "不得將服務用於非法或未經授權的目的",
            "不得干擾或破壞服務的正常運行"
          ]
        },
        "financialDisclaimers": {
          "title": "金融免責聲明",
          "content": [
            "我們提供的所有信息和建議僅供參考，不構成投資建議",
            "投資有風險，您可能損失部分或全部投資",
            "過往表現不代表未來結果",
            "您應該在做出投資決定前諮詢專業的財務顧問",
            "我們不對您的投資決定或結果承擔責任"
          ]
        },
        "fees": {
          "title": "費用和付款",
          "content": [
            "服務費用將根據您選擇的訂閱計劃收取",
            "費用將提前披露，並在確認訂閱時支付",
            "我們可能會調整服務費用，但會提前30天通知",
            "退款政策依據具體服務條款執行",
            "逾期付款可能導致服務暫停"
          ]
        },
        "intellectualProperty": {
          "title": "知識產權",
          "content": [
            "QuantaryX 及其內容受版權、商標和其他知識產權法保護",
            "您不得未經授權複製、修改、分發或使用我們的內容",
            "您對自己上傳的內容保留所有權，但授予我們使用許可",
            "我們尊重他人的知識產權，並期望用戶也這樣做"
          ]
        },
        "limitation": {
          "title": "責任限制",
          "content": [
            "在法律允許的最大範圍內，我們不對任何間接、特殊、偶然或後果性損害承擔責任",
            "我們的總責任不會超過您在過去12個月內支付給我們的費用",
            "某些司法管轄區不允許排除或限制某些損害，在此情況下上述限制可能不適用"
          ]
        },
        "termination": {
          "title": "終止條款",
          "content": [
            "您可以隨時停止使用我們的服務並取消賬戶",
            "我們可能因違反條款或其他合理原因終止您的賬戶",
            "終止後，您使用服務的權利將立即停止",
            "終止不影響在終止前產生的權利和義務"
          ]
        }
      },
      "jurisdiction": {
        "title": "管轄法律和爭議解決",
        "content": [
          "本服務條款受香港特別行政區法律管轄並據其解釋。",
          "任何因本條款或服務使用而產生的爭議將首先通過協商解決。如協商失敗，爭議將提交香港國際仲裁中心按其仲裁規則進行仲裁。"
        ]
      },
      "contact": {
        "title": "聯繫我們",
        "description": "如果您對這些服務條款有任何疑問，請聯繫我們：",
        "legal": "法務部門：",
        "support": "客戶服務：",
        "legalEmail": "legal@quantaryx.com",
        "supportEmail": "support@quantaryx.com"
      }
    },
    "security": {
      "title": "企業級安全保護",
      "subtitle": "QuantaryX 採用銀行級安全標準，通過多層防護體系確保您的資產數據和隱私信息得到最高級別的保護。我們的安全架構經過嚴格的第三方審計，符合國際金融行業最嚴格的安全標準。",
      "backHome": "返回首頁",
      "stats": [
        { "number": "256位", "label": "AES加密強度" },
        { "number": "99.9%", "label": "系統可用性" },
        { "number": "24/7", "label": "安全監控" },
        { "number": "< 1秒", "label": "威脅檢測速度" }
      ],
      "features": {
        "encryption": {
          "title": "端到端加密",
          "description": "所有數據傳輸和存儲均採用 AES-256 軍用級加密標準",
          "details": [
            "傳輸中的數據使用 TLS 1.3 加密協議",
            "靜態數據採用 AES-256 加密算法",
            "密鑰管理通過 AWS KMS 進行",
            "定期密鑰輪換確保長期安全性"
          ]
        },
        "authentication": {
          "title": "多因素身份驗證",
          "description": "多層身份驗證機制保護您的賬戶安全",
          "details": [
            "支持 SMS、郵件和驗證器應用程序",
            "生物識別登錄（指紋、面部識別）",
            "硬件安全密鑰支持（FIDO2/WebAuthn）",
            "智能風險評估和自適應認證"
          ]
        },
        "infrastructure": {
          "title": "安全基礎設施",
          "description": "企業級雲基礎設施提供 99.9% 可用性保證",
          "details": [
            "AWS 多區域部署確保災備恢復",
            "實時監控和異常檢測系統",
            "自動備份和版本控制",
            "物理安全數據中心防護"
          ]
        },
        "privacy": {
          "title": "隱私保護",
          "description": "嚴格的數據隱私政策和訪問控制機制",
          "details": [
            "最小權限原則訪問控制",
            "數據去標識化和匿名化處理",
            "GDPR 和其他隱私法規合規",
            "定期隱私影響評估"
          ]
        },
        "monitoring": {
          "title": "實時監控",
          "description": "24/7 安全運營中心監控所有系統活動",
          "details": [
            "AI 驅動的威脅檢測系統",
            "實時日誌分析和異常警報",
            "自動化事件響應機制",
            "持續安全態勢評估"
          ]
        },
        "compliance": {
          "title": "合規認證",
          "description": "通過多項國際安全標準認證",
          "details": [
            "ISO 27001 信息安全管理體系",
            "SOC 2 Type II 合規審計",
            "PCI DSS 支付卡行業標準",
            "定期第三方安全滲透測試"
          ]
        }
      },
      "architecture": {
        "title": "安全架構",
        "layers": [
          { "title": "應用安全", "description": "身份驗證、授權、會話管理" },
          { "title": "數據安全", "description": "加密、備份、訪問控制" },
          { "title": "運營安全", "description": "24/7監控、威脅檢測、事件響應" }
        ]
      },
      "compliance": {
        "title": "國際認證與合規",
        "certifications": [
          { "name": "ISO 27001", "desc": "信息安全管理" },
          { "name": "SOC 2", "desc": "服務組織控制" },
          { "name": "PCI DSS", "desc": "支付卡行業標準" },
          { "name": "GDPR", "desc": "歐盟數據保護" }
        ]
      },
      "commitment": {
        "title": "我們的安全承諾",
        "description": "QuantaryX 將安全視為最高優先級。我們承諾持續投資於最先進的安全技術，定期進行安全審計，並與領先的安全專家合作，確保您的資產數據始終受到最高級別的保護。",
        "promises": [
          "零容忍安全漏洞",
          "透明的安全報告",
          "持續安全改進"
        ]
      },
      "contact": {
        "title": "安全問題報告",
        "description": "如果您發現任何安全漏洞或有安全相關問題，請立即聯繫我們的安全團隊：",
        "email": "security@quantaryx.com"
      }
    }
  },
  "realTimeTracking": {
    "title": "即時追蹤",
    "portfolioValue": "投資組合價值",
    "currentValue": "$5,950,000",
    "change": "+$520,000 (+9.6%)",
    "timeRange": "今日",
    "performance": {
      "title": "表現分析",
      "dailyGain": "今日收益",
      "totalReturn": "總回報",
      "volatility": "波動率"
    }
  },
  "automatedTrading": {
    "title": "自動化交易",
    "subtitle": "AI已根據市場信號自動執行最優交易策略",
    "strategyPerformance": "策略表現",
    "manual": "手動交易",
    "automated": "AI自動化",
    "tradingExecution": "交易執行記錄",
    "riskControl": "風險控制",
    "systemStatus": "AI 已識別交易機會，並自動執行策略入場",
    "executionCount": "交易已執行",
    "metrics": {
      "volatilityReduction": "波動率降低",
      "maxDrawdown": "最大回撤",
      "sharpeRatio": "夏普比率",
      "winRate": "勝率"
    },
    "actions": {
      "buy": "買入",
      "sell": "賣出",
      "rebalance": "再平衡",
      "stopLoss": "止損"
    },
    "aiScore": "AI 評分"
  },
  "cta": {
    "title": "準備好重新定義你的資產管理方式了嗎？",
    "subtitle": "無論您是高資產個人、家族辦公室、還是專業投資機構，QuantaryX 都能為您提供前所未有的資產掌控體驗。",
    "requestDemo": "請求產品演示",
    "learnPricing": "了解定價",
    "contactUs": "聯繫我們",
    "form": {
      "name": "姓名",
      "namePlaceholder": "您的姓名",
      "email": "電子郵件",
      "emailPlaceholder": "您的電子郵件",
      "type": "您是",
      "message": "訊息",
      "messagePlaceholder": "請告訴我們您的需求",
      "submit": "提交",
      "submitting": "提交中...",
      "options": {
        "individual": "高淨值個人",
        "family": "家族辦公室",
        "professional": "資產管理專業人士",
        "investor": "投資者",
        "other": "其他"
      }
    },
    "pricing": {
      "title": "定價方案",
      "comingSoon": "即將上線，敬請期待",
      "description": "我們正在為不同規模的客戶打造靈活的訂閱方案。請填寫聯繫表單以獲取最新定價信息。"
    },
    "toast": {
      "demoRequest": {
        "title": "請求產品演示",
        "description": "請先填寫右側表格的聯繫信息，我們將安排專屬演示"
      },
      "formSuccess": {
        "title": "表單提交成功",
        "description": "我們已收到您的信息，將盡快與您聯系"
      }
    },
    "startTrial": "開始免費試用",
    "contactSales": "聯繫銷售團隊"
  },
  "common": {
    "loading": "載入中...",
    "error": "錯誤",
    "success": "成功",
    "cancel": "取消",
    "confirm": "確認",
    "save": "保存",
    "edit": "編輯",
    "delete": "刪除",
    "view": "查看",
    "back": "返回",
    "next": "下一步",
    "previous": "上一步",
    "close": "關閉",
    "open": "打開",
    "price": "價格",
    "quantity": "數量",
    "totalAmount": "總金額",
    "profit": "收益",
    "time": "時間",
    "aiScore": "AI 評分",
    "shares": "股"
  },
  "simulator": {
    "title": "AI 投資策略輪盤",
    "subtitle": "選擇市場情境並投入模擬代幣以獲得AI投資建議",
    "selectMarket": "選擇市場情境",
    "marketScenarios": {
      "bull": "多頭市場",
      "bear": "空頭市場",
      "volatile": "高波動性"
    },
    "assets": {
      "aiStocks": "AI 股票",
      "bonds": "債券",
      "gold": "黃金",
      "aiTech": "AI 科技股"
    },
    "analysisComplete": "分析完成！",
    "aiRecommendation": "AI 推薦投資組合：",
    "aiInsightTitle": "AI 智能洞察",
    "insightText": "根據您選擇的{scenario}市場情境，AI推薦上述資產配置以平衡收益和風險。此策略考慮了當前市場波動性和長期增長潛力。",
    "generatedStrategy": "AI已為{scenario}市場條件生成最佳投資配置",
    "insertCoin": "投入代幣",
    "insertCoinLabel": "投入模擬代幣",
    "aiMachine": "AI 投資機器",
    "pullLever": "拉動拉桿",
    "aiRecommendedAllocation": "AI 推薦配置"
  },
  "dataIntegration": {
    "title": "智能數據整合流程",
    "unstructured": {
      "title": "非結構化數據",
      "description": "各種格式的原始數據需要整合和處理，包括文檔、圖像、表格等非結構化數據",
      "documents": {
        "financialReport": "財務報告.pdf",
        "invoiceScan": "發票掃描.jpg",
        "dataTable": "數據表格.xlsx",
        "analysisChart": "分析圖表.csv",
        "receiptImage": "收據圖像.png",
        "handwrittenNote": "手寫備註.jpg"
      }
    },
    "processing": {
      "title": "智能分析引擎",
      "description": "AI引擎正在處理和分析非結構化數據，提取關鍵信息並轉換為結構化格式"
    },
    "structured": {
      "title": "結構化數據",
      "description": "經過AI處理的數據已轉換為結構化格式，可用於分析和決策制定",
      "financialReport": "財務報表",
      "autoGenerated": "自動生成",
      "assetDistribution": "資產分布",
      "tableHeaders": {
        "account": "賬戶",
        "value": "價值", 
        "change": "變化"
      },
      "accounts": {
        "investmentA": "投資賬戶 A",
        "retirementPlan": "退休計劃",
        "realEstate": "房地產投資",
        "cashReserve": "現金儲備",
        "stockInvestment": "股票投資",
        "bondPortfolio": "債券投資組合",
        "foreignCurrency": "外幣賬戶",
        "privateFund": "私募基金"
      }
    },
    "steps": {
      "unstructured": "非結構化數據",
      "processing": "智能處理",
      "structured": "結構化數據"
    }
  },
  "language": {
    "chinese": "中文",
    "english": "English",
    "switchLanguage": "切換語言"
  },
  "partners": {
    "title": "合作夥伴"
  },
  "realTimeMonitoring": "實時監控",
  "portfolioValue": "投資組合價值"
};

const enTranslations = {
  "navbar": {
    "brand": "QuantaryX",
    "products": "Products",
    "vision": "Vision",
    "investors": "Investors",
    "contact": "Contact Us",
    "requestDemo": "Request Demo",
    "openMenu": "Open Menu",
    "closeMenu": "Close Menu"
  },
  "hero": {
    "title": "Next-Generation Asset Management Platform for Smart Investors",
    "subtitle": "Built for high-net-worth individuals and professional investors",
    "ctaButton": "Start Free Trial",
    "learnMore": "Learn More",
    "features": {
      "smartAnalysis": {
        "title": "Smart Asset Analysis",
        "description": "AI-enhanced asset value trend prediction and risk identification"
      },
      "autoOptimization": {
        "title": "Automated Investment Optimization",
        "description": "AI-driven investment strategy adjustments based on market behavior"
      },
      "dataIntegration": {
        "title": "Intelligent Data Integration",
        "description": "Automated parsing and correlation building of multi-source financial data"
      },
      "opportunityIdentification": {
        "title": "Investment Opportunity Identification",
        "description": "AI screening of high-value investment targets and market timing"
      }
    },
    "aiInsight": {
      "title": "AI Insights",
      "performance": "Based on your historical performance, we recommend increasing",
      "allocation": "15% allocation",
      "riskWarning": "Current market volatility is high, proceed with caution"
    },
    "portfolioValue": "Portfolio Value",
    "monthlyGrowth": "Monthly Growth",
    "assetOverview": "Asset Overview",
    "insights": {
      "smartAnalysis": "Analysis shows your assets peaked in August, recommend focusing on liquidity allocation to optimize year-end tax planning.",
      "autoOptimization": "Based on your risk preference and market volatility, AI recommends increasing 10% defensive assets to balance the portfolio.",
      "dataIntegration": "The system has automatically integrated data from 12 financial institutions and identified 3 duplicate asset items."
    },
    "getAdvantage": "Get Advantage",
    "aiCapabilities": "AI-Driven Capabilities",
    "charts": {
      "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      "assetTypes": {
        "stocks": "Stocks",
        "bonds": "Bonds",
        "realEstate": "Real Estate",
        "alternative": "Alternative",
        "cash": "Cash"
      },
      "alternativeInvestments": {
        "privateEquity": "Private Equity",
        "realEstateFunds": "Real Estate Funds",
        "hedgeFunds": "Hedge Funds",
        "artCollections": "Art Collections",
        "commodityFutures": "Commodities"
      },
      "tooltips": {
        "percentage": "Percentage",
        "realTimeValue": "Real-Time Value",
        "performance": "Performance",
        "netValue": "Net Value"
      }
    },
    "advancedFeatures": {
      "title": "QuantaryX Core AI Features",
      "subtitle": "Explore how we use artificial intelligence to redefine wealth management experience",
      "wealthOverview": {
        "title": "Wealth Overview", 
        "description": "AI-driven comprehensive wealth dashboard",
        "details": "Our AI system automatically connects and analyzes all your asset data, including bank accounts, portfolios, real estate, private equity, and cryptocurrencies, to create a comprehensive wealth dashboard.",
        "capabilities": [
          "Asset Category Auto-classification and Tagging",
          "Cross-institution Asset Integration and Synchronization", 
          "AI Anomaly Detection and Risk Alerts",
          "Predictive Net Worth Change Trend Analysis"
        ],
        "uniqueFeature": "The biggest difference from other platforms is our ability to automatically process unstructured financial files - from bank statements to investment memos, our AI system can extract key data and establish associations.",
        "aiInsight": "Our AI can predict your cash flow and liquidity needs for the next 12 months based on your asset allocation, ensuring you don't need to sell assets quickly when you need cash."
      },
      "alternativeInvestments": {
        "title": "Alternative Investments Overview",
        "description": "Private equity, real estate, and art intelligent tracking", 
        "details": "QuantaryX's AI system can track, analyze, and evaluate traditional hard-to-quantify alternative investments, including private equity, real estate, collectibles, and art.",
        "capabilities": [
          "Non-Liquidity Asset Valuation AI Model",
          "Private Investment Performance Tracking Engine",
          "Alternative Investment and Public Market Correlation Analysis",
          "Smart Liquidity Prediction and Strategy Suggestions"
        ],
        "uniqueFeature": "The only platform in the market that can create a dynamic valuation model for non-listed assets, integrating multiple valuation methods and continuously updating valuations based on new information.",
        "aiInsight": "The system discovered that your alternative investment portfolio had an 85% positive correlation with specific economic indicators, which may suffer greater impact during economic downturns, suggesting an increase in hedging strategies."
      },
      "realTimeTracking": {
        "title": "Real-Time Tracking",
        "description": "Market volatility real-time update and AI analysis",
        "details": "Our AI system not only tracks your portfolio performance in real-time but also intelligently analyzes the impact of market volatility on your assets and provides real-time insights and suggestions.",
        "capabilities": [
          "Market Data and Portfolio Impact Analysis",
          "News Event and Asset Correlation AI Detection", 
          "Real-Time Portfolio Risk Assessment",
          "Emotional Analysis and Market Trend Prediction"
        ],
        "uniqueFeature": "Unique Event-Driven Monitoring System, able to identify signals related to your portfolio in news, social media, and market data, and calculate possible impacts.",
        "aiInsight": "Based on the latest market data and news analysis, the system detected that the three tech stocks you held may be affected by an upcoming regulatory policy, suggesting monitoring related dynamics."
      },
      "automatedTrading": {
        "title": "Automated Trading",
        "description": "AI strategy-driven intelligent trading system",
        "details": "QuantaryX's AI trading system can automatically execute trading strategies based on your risk preference and investment goals, including rebalancing, stop-loss, and strategy entry/exit.",
        "capabilities": [
          "Smart Rebalancing and Tax Optimization Trading",
          "Dynamic Stop-Loss/Take-Profit Strategy Execution",
          "Multi-Factor AI Trading Signal Generation",
          "Portfolio Hedging Automatic Adjustment"
        ],
        "uniqueFeature": "Industry-First Tax Optimization Trading Engine, able to automatically consider tax impacts when executing rebalancing and adjustments, maximizing post-tax returns.",
        "aiInsight": "System analysis shows that after adopting AI automated trading strategies, your portfolio's annualized volatility decreased by 15% while maintaining similar returns."
      },
      "fullAi": {
        "title": "Full AI Experience", 
        "description": "Full-Service AI Assistant for Wealth Management",
        "details": "Our AI wealth assistant can understand your long-term financial goals and proactively provide insights, suggestions, and decision support, making wealth management unprecedentedly simple and intelligent.",
        "capabilities": [
          "Natural Language Financial Query System",
          "Smart Decision Recommendation Engine",
          "Cross-Asset Category Correlation Analysis", 
          "Personalized Wealth Goal Tracking and Adjustment"
        ],
        "uniqueFeature": "Breakthrough AI Wealth Assistant, able to understand your financial goals and preferences through natural language conversation, and learn your decision patterns over time, providing increasingly personalized suggestions.",
        "aiInsight": "Based on your financial decision and goal setting over the past 6 months, the AI system has established your financial preference model, now able to predict your acceptance of various investment suggestions at 85% accuracy."
      }
    },
    "featureDetails": "Feature Details",
    "mainTitle": {
      "line1": "Redefine Asset",
      "line2": "Control with AI"
    },
    "description": "QuantaryX integrates AI deep learning, knowledge graphs, and natural language processing technologies to provide comprehensive asset visualization, intelligent decision-making, and automated execution platforms for high-net-worth individuals and professional investors."
  },
  "products": {
    "title": "Four Product Matrix",
    "subtitle": "Complete solutions built by QuantaryX for high-net-worth individuals and professional investors",
    "finora": {
      "title": "Finora",
      "subtitle": "Take complete control of your financial life for the first time.",
      "description": "Provides AI-driven investment advice and automated portfolio management for individual investors",
      "features": [
        "AI Financial Brain: Build relationship maps for every transaction and asset",
        "Automatic Financial Document Parsing: Integrate reports and transfer records automatically",
        "Real-time Financial Status Visualization: Multi-dimensional net worth trends and analysis",
        "Asset Change AI Warning System: Proactively notify risks or misallocations"
      ]
    },
    "wiselens": {
      "title": "Wiselens",
      "subtitle": "Let AI help you build portfolios, place orders, and rebalance positions.",
      "description": "Provides deep asset analysis and market insights for institutional investors",
      "features": [
        "Real-time Investment Dashboard: Fund performance and NAV at a glance",
        "AI ETF Portfolio Recommendation System: Design portfolios based on profiles",
        "Strategic Automated Trading Engine: Support DCA, stop-loss, take-profit",
        "One-click Trading + API Integration with Brokers/Banks: Direct execution"
      ]
    },
    "nurocrm": {
      "title": "NuroCRM",
      "subtitle": "Remember the intent behind every conversation and predict what to say next.",
      "description": "Provides intelligent customer relationship management and investment tracking for financial advisors",
      "features": [
        "Voice/Conversation Content Semantic Analysis: Identify emotional fluctuations and preferences",
        "Smart Action Suggestions and Product Pairing: Generate potential recommendations",
        "Relationship Depth Reminder System: Proactively remind of appropriate follow-up timing",
        "Pre-meeting Summary & Customer Personality Report Auto-generation"
      ]
    },
    "deallens": {
      "title": "DealLens",
      "subtitle": "You don't need to manually review 50 pitch decks anymore - AI picks out the ones worth your attention.",
      "description": "Provides real-time market analysis and trading signals for traders",
      "features": [
        "Automatic Investment Deal Sourcing: Sync PDFs and Decks from multiple channels",
        "AI Summary Extraction and Rating Recommendations: Extract key information",
        "Automatic Comparison with Historical Cases: Find similar investment cases",
        "Actionable Investment Record System: Complete milestone management"
      ]
    },
    "requestDemo": "Request Product Demo",
    "popup": {
      "finoraDescription": "Comprehensive personal financial management and asset analysis platform",
      "comingSoon": "Coming Soon",
      "viewDemo": "View Demo",
      "joinWaitlist": "Join Waitlist"
    }
  },
  "vision": {
    "title": "Our Vision",
    "subtitle": "Transforming the Future of FinTech",
    "description": "What QuantaryX aims to build is not just a useful financial tool. We are creating a platform that enables individuals and institutions to use AI to understand assets, control wealth, and expand value.",
    "values": {
      "innovation": {
        "title": "Understand Assets",
        "description": "Using AI deep learning technology to integrate scattered financial data into a complete asset panorama, allowing you to truly understand capital flows and investment situations."
      },
      "security": {
        "title": "Control Wealth",
        "description": "Through automated strategy execution and intelligent risk monitoring, maintain proactive control in complex and volatile markets rather than passive responses."
      },
      "transparency": {
        "title": "Expand Value",
        "description": "Through AI-driven investment decision support and market opportunity identification, help you expand your investment portfolio at appropriate times to achieve long-term value growth."
      }
    }
  },
  "investors": {
    "title": "Investor Relations",
    "subtitle": "Grow With Us",
    "description": "QuantaryX is seeking strategic investment partners to build the future of financial technology together",
    "opportunity": {
      "title": "Investment Opportunity",
      "description": "QuantaryX is seeking next-round funding to accelerate product development and market expansion. We invite visionary investors to become part of the future of asset management.",
      "benefits": [
        "Revolutionary AI asset management technology, redefine wealth management market",
        "Massive high-net-worth individual and institutional investor customer base",
        "Comprehensive product matrix, complete coverage of asset management process",
        "Highly scalable SaaS business model",
        "Professional team integrates AI, finance, and product development experience"
      ],
      "investorPackage": "Investor Data Package"
    },
    "marketOpportunity": {
      "title": "Market Opportunity",
      "globalHNWI": "Global High Net Worth Individual Market",
      "globalHNWIValue": "$80+ Trillion",
      "familyOffice": "Family Office Asset Management", 
      "familyOfficeValue": "$5.9+ Trillion",
      "fintechGrowth": "Financial Technology Annual Growth Rate",
      "fintechGrowthValue": "23.4%",
      "aiWealthManagement": "AI Wealth Management Market Potential",
      "aiWealthManagementValue": "$4.2+ Trillion"
    },
    "popup": {
      "title": "Investor Data",
      "comingSoon": "Coming Soon",
      "understood": "I Understand"
    },
    "stats": {
      "users": "Active Users",
      "assets": "Assets Under Management",
      "growth": "Annual Growth Rate",
      "satisfaction": "Customer Satisfaction"
    }
  },
  "footer": {
    "description": "Providing comprehensive asset visualization, intelligent decision-making, and automated execution platforms for high-net-worth individuals and professional investors.",
    "sections": {
      "products": "Products",
      "company": "Company",
      "contact": "Contact Us"
    },
    "company": {
      "aboutUs": "About Us",
      "team": "Team",
      "investorRelations": "Investor Relations"
    },
    "contact": {
      "email": "info@quantaryx.com",
      "phone": "+852 3757 9783",
      "emailLabel": "Email"
    },
    "legal": {
      "copyright": "All rights reserved.",
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "security": "Security"
    }
  },
  "pages": {
    "notFound": {
      "title": "Page Not Found",
      "description": "Sorry, the page you are looking for does not exist.",
      "backHome": "Back to Home"
    },
    "privacyPolicy": {
      "title": "Privacy Policy",
      "subtitle": "QuantaryX is committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and protect your information.",
      "lastUpdated": "Last Updated: {month} {date}, {year}",
      "backHome": "Back to Home",
      "sections": {
        "collection": {
          "title": "Information Collection",
          "content": [
            "Personal Identity Information: Name, Email Address, Phone Number, Contact Information",
            "Financial Information: Investment Portfolio Data, Transaction Records, Asset Information (with your explicit authorization)",
            "Technical Information: Device Information, IP Address, Browser Type, Usage Statistics",
            "Authentication Information: For verifying your identity"
          ]
        },
        "usage": {
          "title": "Information Usage",
          "content": [
            "Providing and improving our AI asset management services",
            "Personalized Investment Advice and Risk Analysis",
            "Security Monitoring and Fraud Protection",
            "Customer Support and Technical Maintenance",
            "Compliance with Laws and Regulations"
          ]
        },
        "protection": {
          "title": "Data Protection",
          "content": [
            "End-to-End Encryption: All sensitive data is encrypted using bank-level encryption technology",
            "Access Control: Strict permission management and multi-factor authentication",
            "Regular Security Audits: Engaging third-party security companies for penetration testing",
            "Disaster Recovery: Multi-region data backups to ensure business continuity",
            "Employee Training: All employees must pass data security certification"
          ]
        },
        "sharing": {
          "title": "Information Sharing",
          "content": [
            "We will not sell your personal information to third parties",
            "We will only share necessary information with partner financial institutions with your explicit consent",
            "Complying with legal requirements to provide information to regulatory authorities",
            "Sharing technical and operational support information with service providers",
            "Data may be transferred in the event of a company reorganization (will notify users in advance)"
          ]
        },
        "rights": {
          "title": "Your Rights",
          "content": [
            "Viewing Rights: Access and view your personal information collected by us at any time",
            "Correcting Rights: Request corrections to incorrect or incomplete information",
            "Deletion Rights: Request deletion of your personal data (within the scope permitted by law)",
            "Portability Rights: Obtain your data in machine-readable format",
            "Withdrawal of Consent: Withdraw consent for data processing at any time"
          ]
        },
        "updates": {
          "title": "Policy Updates",
          "content": [
            "We may update this privacy policy from time to time",
            "Important changes will be notified to you 30 days in advance via email",
            "We recommend that you check the latest version periodically",
            "Continuing to use our services means accepting the updated policy"
          ]
        }
      },
      "contact": {
        "title": "Contact Us",
        "description": "If you have any questions or want to exercise your rights, please contact us via the following methods:",
        "email": "privacy@quantaryx.com"
      }
    },
    "termsOfService": {
      "title": "Terms of Service",
      "subtitle": "These terms govern your use of QuantaryX services. Please read these terms carefully as they contain important legal rights and obligations.",
      "effectiveDate": "Effective Date: {month} {date}, {year}",
      "backHome": "Back to Home",
      "importantNotice": {
        "title": "Important Notice",
        "content": "QuantaryX services involve financial investments, and we strongly advise you to carefully consider your financial situation and risk tolerance before using our services."
      },
      "sections": {
        "acceptance": {
          "title": "Acceptance of Terms",
          "content": [
            "By accessing or using QuantaryX services, you agree to be bound by these terms",
            "If you do not agree to these terms, please do not use our services",
            "We may update these terms from time to time, and the updated terms will take effect immediately upon publication",
            "Continuing to use our services means accepting the updated terms"
          ]
        },
        "services": {
          "title": "Service Description",
          "content": [
            "QuantaryX provides AI-driven asset management and investment analysis services",
            "Our services include but are not limited to: Investment Portfolio Analysis, Risk Assessment, Market Insights, Investment Advice",
            "Service content may vary depending on your subscription plan",
            "We reserve the right to modify, suspend, or terminate any service functionality at any time"
          ]
        },
        "userObligations": {
          "title": "User Obligations",
          "content": [
            "You must be at least 18 years old and have full civil capacity",
            "Provide true, accurate, and complete registration information",
            "Protect your account security and do not share login credentials with others",
            "Comply with all applicable laws and regulations",
            "Do not use our services for illegal or unauthorized purposes",
            "Do not interfere or disrupt the normal operation of our services"
          ]
        },
        "financialDisclaimers": {
          "title": "Financial Disclaimers",
          "content": [
            "All information and advice provided are for reference only and do not constitute investment advice",
            "Investment is risky, and you may lose part or all of your investment",
            "Past performance does not represent future results",
            "You should consult a professional financial advisor before making investment decisions",
            "We do not assume responsibility for your investment decisions or results"
          ]
        },
        "fees": {
          "title": "Fees and Payments",
          "content": [
            "Service fees will be charged according to the subscription plan you choose",
            "Fees will be disclosed in advance and paid at the time of subscription confirmation",
            "We may adjust service fees, but will notify you 30 days in advance",
            "Refund policy will be executed according to specific service terms",
            "Late payment may result in service suspension"
          ]
        },
        "intellectualProperty": {
          "title": "Intellectual Property",
          "content": [
            "QuantaryX and its content are protected by copyright, trademark, and other intellectual property laws",
            "You are not allowed to copy, modify, distribute, or use our content without authorization",
            "You retain all rights to content you upload, but grant us a license to use",
            "We respect others' intellectual property rights and expect users to do the same"
          ]
        },
        "limitation": {
          "title": "Liability Limitation",
          "content": [
            "Within the scope permitted by law, we do not assume responsibility for any indirect, special, incidental, or consequential damages",
            "Our total liability will not exceed the fees you have paid to us in the past 12 months",
            "Certain jurisdictions may not allow the exclusion or limitation of certain damages, in which case the above limitations may not apply"
          ]
        },
        "termination": {
          "title": "Termination Clause",
          "content": [
            "You can stop using our services and cancel your account at any time",
            "We may terminate your account for breach of terms or for other reasonable reasons",
            "Termination will immediately stop your right to use our services",
            "Termination will not affect your rights and obligations arising before termination"
          ]
        }
      },
      "jurisdiction": {
        "title": "Jurisdiction and Dispute Resolution",
        "content": [
          "These terms of service are governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region.",
          "Any dispute arising out of or related to these terms or service use will first be resolved through negotiation. If negotiation fails, the dispute will be submitted to arbitration at the Hong Kong International Arbitration Center under its arbitration rules."
        ]
      },
      "contact": {
        "title": "Contact Us",
        "description": "If you have any questions about these terms of service, please contact us:",
        "legal": "Legal Department:",
        "support": "Customer Service:",
        "legalEmail": "legal@quantaryx.com",
        "supportEmail": "support@quantaryx.com"
      }
    },
    "security": {
      "title": "Enterprise-Level Security Protection",
      "subtitle": "QuantaryX adopts bank-level security standards, ensuring the highest level of protection for your asset data and privacy information through multi-layer protection system. Our security architecture has been strictly audited by third-party auditors, meeting the most stringent security standards in the international financial industry.",
      "backHome": "Back to Home",
      "stats": [
        { "number": "256-bit", "label": "AES Encryption Strength" },
        { "number": "99.9%", "label": "System Availability" },
        { "number": "24/7", "label": "Security Monitoring" },
        { "number": "< 1 second", "label": "Threat Detection Speed" }
      ],
      "features": {
        "encryption": {
          "title": "End-to-End Encryption",
          "description": "All data transmission and storage uses AES-256 military-grade encryption standard",
          "details": [
            "Data transmission uses TLS 1.3 encryption protocol",
            "Static data uses AES-256 encryption algorithm",
            "Key management through AWS KMS",
            "Regular key rotation to ensure long-term security"
          ]
        },
        "authentication": {
          "title": "Multi-Factor Authentication",
          "description": "Multi-layer authentication mechanism to protect your account security",
          "details": [
            "Support SMS, email, and verification application",
            "Biometric login (fingerprint, facial recognition)",
            "Hardware security key support (FIDO2/WebAuthn)",
            "Smart risk assessment and adaptive authentication"
          ]
        },
        "infrastructure": {
          "title": "Security Infrastructure",
          "description": "Enterprise-level cloud infrastructure providing 99.9% availability guarantee",
          "details": [
            "AWS multi-region deployment to ensure disaster recovery",
            "Real-time monitoring and anomaly detection system",
            "Automatic backup and version control",
            "Physical security data center protection"
          ]
        },
        "privacy": {
          "title": "Privacy Protection",
          "description": "Strict data privacy policy and access control mechanism",
          "details": [
            "Minimum permission principle access control",
            "Data de-identification and anonymization processing",
            "Compliance with GDPR and other privacy laws",
            "Regular privacy impact assessment"
          ]
        },
        "monitoring": {
          "title": "Real-Time Monitoring",
          "description": "24/7 security operations center monitoring all system activities",
          "details": [
            "AI-driven threat detection system",
            "Real-time log analysis and anomaly alarm",
            "Automated event response mechanism",
            "Continuous security posture assessment"
          ]
        },
        "compliance": {
          "title": "Compliance Certification",
          "description": "Passing multiple international security standards certification",
          "details": [
            "ISO 27001 Information Security Management System",
            "SOC 2 Type II Compliance Audit",
            "PCI DSS Payment Card Industry Standard",
            "Regular third-party security penetration testing"
          ]
        }
      },
      "architecture": {
        "title": "Security Architecture",
        "layers": [
          { "title": "Application Security", "description": "Identity Authentication, Authorization, Conversation Management" },
          { "title": "Data Security", "description": "Encryption, Backup, Access Control" },
          { "title": "Operational Security", "description": "24/7 Monitoring, Threat Detection, Event Response" }
        ]
      },
      "compliance": {
        "title": "International Certification and Compliance",
        "certifications": [
          { "name": "ISO 27001", "desc": "Information Security Management" },
          { "name": "SOC 2", "desc": "Service Organization Control" },
          { "name": "PCI DSS", "desc": "Payment Card Industry Standard" },
          { "name": "GDPR", "desc": "EU Data Protection" }
        ]
      },
      "commitment": {
        "title": "Our Security Commitment",
        "description": "QuantaryX views security as the highest priority. We commit to continuously investing in the most advanced security technologies, regularly conducting security audits, and collaborating with leading security experts to ensure that your asset data is always protected at the highest level.",
        "promises": [
          "Zero Tolerance for Security Vulnerabilities",
          "Transparent Security Reporting",
          "Continuous Security Improvement"
        ]
      },
      "contact": {
        "title": "Security Issue Reporting",
        "description": "If you discover any security vulnerabilities or have security-related issues, please contact our security team immediately:",
        "email": "security@quantaryx.com"
      }
    }
  },
  "realTimeTracking": {
    "title": "Real-Time Tracking",
    "portfolioValue": "Portfolio Value",
    "currentValue": "$5,950,000",
    "change": "+$520,000 (+9.6%)",
    "timeRange": "Today",
    "performance": {
      "title": "Performance Analysis",
      "dailyGain": "Daily Gain",
      "totalReturn": "Total Return",
      "volatility": "Volatility"
    }
  },
  "automatedTrading": {
    "title": "Automated Trading",
    "subtitle": "AI has automatically executed optimal trading strategies based on market signals",
    "strategyPerformance": "Strategy Performance",
    "manual": "Manual Trading",
    "automated": "AI Automated",
    "tradingExecution": "Trading Execution Log",
    "riskControl": "Risk Control",
    "systemStatus": "AI has identified trading opportunities and automatically executed entry strategies",
    "executionCount": "Trade Executed",
    "metrics": {
      "volatilityReduction": "Volatility Reduction",
      "maxDrawdown": "Max Drawdown",
      "sharpeRatio": "Sharpe Ratio",
      "winRate": "Win Rate"
    },
    "actions": {
      "buy": "Buy",
      "sell": "Sell",
      "rebalance": "Rebalance",
      "stopLoss": "Stop Loss"
    },
    "aiScore": "AI Score"
  },
  "cta": {
    "title": "Ready to Redefine Your Asset Management?",
    "subtitle": "Whether you are a high-net-worth individual, family office, or professional investment institution, QuantaryX can provide you with an unprecedented asset control experience.",
    "requestDemo": "Request Product Demo",
    "learnPricing": "Learn Pricing",
    "contactUs": "Contact Us",
    "form": {
      "name": "Name",
      "namePlaceholder": "Your name",
      "email": "Email",
      "emailPlaceholder": "Your email address",
      "type": "You are",
      "message": "Message",
      "messagePlaceholder": "Please tell us about your needs",
      "submit": "Submit",
      "submitting": "Submitting...",
      "options": {
        "individual": "High Net Worth Individual",
        "family": "Family Office",
        "professional": "Asset Management Professional",
        "investor": "Investor",
        "other": "Other"
      }
    },
    "pricing": {
      "title": "Pricing Plans",
      "comingSoon": "Coming Soon",
      "description": "We are creating flexible subscription plans for clients of different scales. Please fill out the contact form to get the latest pricing information."
    },
    "toast": {
      "demoRequest": {
        "title": "Request Product Demo",
        "description": "Please fill out the contact form on the right, and we will arrange a dedicated demo"
      },
      "formSuccess": {
        "title": "Form Submitted Successfully",
        "description": "We have received your information and will contact you soon"
      }
    },
    "startTrial": "Start Free Trial",
    "contactSales": "Contact Sales Team"
  },
  "common": {
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "save": "Save",
    "edit": "Edit",
    "delete": "Delete",
    "view": "View",
    "back": "Back",
    "next": "Next",
    "previous": "Previous",
    "close": "Close",
    "open": "Open",
    "price": "Price",
    "quantity": "Quantity",
    "totalAmount": "Total Amount",
    "profit": "Profit",
    "time": "Time",
    "aiScore": "AI Score",
    "shares": "Shares"
  },
  "simulator": {
    "title": "AI Investment Strategy Wheel",
    "subtitle": "Select market scenario and invest simulation coins to get AI investment advice",
    "selectMarket": "Select Market Scenario",
    "marketScenarios": {
      "bull": "Bull Market",
      "bear": "Bear Market",
      "volatile": "High Volatility"
    },
    "assets": {
      "aiStocks": "AI Stocks",
      "bonds": "Bonds",
      "gold": "Gold",
      "aiTech": "AI Tech Stocks"
    },
    "analysisComplete": "Analysis Complete!",
    "aiRecommendation": "AI Recommended Portfolio:",
    "aiInsightTitle": "AI Smart Insight",
    "insightText": "Based on your selected {scenario} market scenario, AI recommends the above asset allocation to balance returns and risks. This strategy considers current market volatility and long-term growth potential.",
    "generatedStrategy": "AI has generated optimal investment allocation for {scenario} market conditions",
    "insertCoin": "Insert Coin",
    "insertCoinLabel": "Insert Simulation Coin",
    "aiMachine": "AI Investment Machine",
    "pullLever": "Pull Lever",
    "aiRecommendedAllocation": "AI Recommended Allocation"
  },
  "dataIntegration": {
    "title": "Intelligent Data Integration Process",
    "unstructured": {
      "title": "Unstructured Data",
      "description": "Raw data in various formats needs to be integrated and processed, including documents, images, tables and other unstructured data",
      "documents": {
        "financialReport": "Financial Report.pdf",
        "invoiceScan": "Invoice Scan.jpg",
        "dataTable": "Data Table.xlsx",
        "analysisChart": "Analysis Chart.csv",
        "receiptImage": "Receipt Image.png",
        "handwrittenNote": "Handwritten Note.jpg"
      }
    },
    "processing": {
      "title": "Intelligent Analysis Engine",
      "description": "AI engine is processing and analyzing unstructured data, extracting key information and converting to structured format"
    },
    "structured": {
      "title": "Structured Data",
      "description": "AI-processed data has been converted to structured format, ready for analysis and decision making",
      "financialReport": "Financial Report",
      "autoGenerated": "Auto Generated",
      "assetDistribution": "Asset Distribution",
      "tableHeaders": {
        "account": "Account",
        "value": "Value", 
        "change": "Change"
      },
      "accounts": {
        "investmentA": "Investment Account A",
        "retirementPlan": "Retirement Plan",
        "realEstate": "Real Estate Investment",
        "cashReserve": "Cash Reserve",
        "stockInvestment": "Stock Investment",
        "bondPortfolio": "Bond Portfolio",
        "foreignCurrency": "Foreign Currency",
        "privateFund": "Private Fund"
      }
    },
    "steps": {
      "unstructured": "Unstructured Data",
      "processing": "Intelligent Processing",
      "structured": "Structured Data"
    }
  },
  "language": {
    "chinese": "中文",
    "english": "English",
    "switchLanguage": "Switch Language"
  },
  "partners": {
    "title": "Partners"
  },
  "realTimeMonitoring": "Real-Time Monitoring",
  "portfolioValue": "Portfolio Value"
};

const resources = {
  en: {
    translation: enTranslations
  },
  zh: {
    translation: zhTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n; 