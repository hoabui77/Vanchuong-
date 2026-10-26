/* ========================================================================
       1. BIẾN CẤU HÌNH TRUNG TÂM (DỄ DÀNG CHỈNH SỬA THÔNG TIN CÁ NHÂN)
       ======================================================================== */
    const TEACHER_CONFIG = {
      displayName: "Cô Hòa Đồng – Giáo viên Ngữ văn THCS",
      shortName: "Cô Hòa Đồng",
      schoolOrLocality: "[TRƯỜNG HỌC / ĐỊA PHƯƠNG]",
      phone: "0983507192",
      zaloUrl: "https://zalo.me/0983507192",
      facebookUrl: "https://www.facebook.com/hoa.dong.370515"
    };

    /* ========================================================================
       2. CƠ SỞ DỮ LIỆU 8 HỌC LIỆU NGỮ VĂN THCS (LỚP 6, 7, 8, 9 - CT GDPT 2018)
       ======================================================================== */
    const LESSONS_DATA = [
      {
        id: "nv6-bai-hoc-duong-doi-dau-tien",
        grade: "Lớp 6",
        subCategory: "Đọc hiểu văn bản",
        isWritingSkill: false,
        title: "Bài học đường đời đầu tiên (Trích Dế Mèn phiêu lưu kí – Tô Hoài)",
        summary: "Khám phá nghệ thuật miêu tả loài vật sinh động của nhà văn Tô Hoài, phân tích vẻ đẹp cường tráng nhưng kiêu ngạo của Dế Mèn và bài học nhân sinh sâu sắc sau cái chết thương tâm của Dế Choắt.",
        tags: ["Truyện đồng thoại", "Ngôi kể thứ nhất", "Lớp 6", "Tô Hoài"],
        objectives: [
          "Nhận biết được đặc điểm của truyện đồng thoại: nhân vật loài vật được nhân hóa vừa mang tập tính tự nhiên vừa phản ánh tâm lý con người.",
          "Phân tích được sự đối lập giữa ngoại hình khỏe đẹp, cường tráng với tính cách hung hăng, xốc nổi của Dế Mèn trước biến cố.",
          "Rút ra bài học ứng xử khiêm tốn, biết thấu cảm với người yếu thế và dũng cảm nhận lỗi."
        ],
        mindmap: [
          "Nhánh 1 – Chân dung Dế Mèn: Đôi càng mẫm bóng, vuốt nhọn hoắt, cánh dài chấm đuôi -> Tự phụ, coi thường xóm giềng.",
          "Nhánh 2 – Trò đùa tai hại: Khinh thường Dế Choắt ốm yếu, bày trò trêu chị Cốc dẫn đến cái chết oan uổng của người bạn hàng xóm.",
          "Nhánh 3 – Sự thức tỉnh: Đứng lặng trước nấm mộ Dế Choắt, thấm thía lời khuyên: 'Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn rồi cũng mang vạ vào mình đấy'."
        ],
        thinkingQuestions: [
          "Câu 1: Vì sao tác giả Tô Hoài chọn ngôi kể thứ nhất (Dế Mèn tự kể lại câu chuyện của mình) để thuật lại lỗi lầm năm xưa?",
          "Câu 2: Chi tiết Dế Mèn 'đứng lặng giờ lâu' trước nấm mộ Dế Choắt cho thấy sự chuyển biến tâm lý nào trong nhân vật?",
          "Câu 3: Từ câu chuyện của Dế Mèn, em hãy chia sẻ một tình huống trong cuộc sống học đường cần sự bao dung và khiêm nhường."
        ],
        sampleParagraph: "Bằng nghệ thuật nhân hóa tài tình và ngôn ngữ giàu chất tạo hình, đoạn trích 'Bài học đường đời đầu tiên' của Tô Hoài đã khắc họa thành công bước trưởng thành đầu đời đầy đau xót của chàng Dế Mèn. Từ một chàng dế thanh niên cường tráng nhưng kiêu căng, hợm hĩnh, cái chết thương tâm của người anh hàng xóm Dế Choắt đã trở thành cú sốc thức tỉnh lương tri. Giọt nước mắt ăn năn và lời tự vấn bên nấm cỏ non không chỉ khép lại những tháng ngày nông nổi mà còn mở ra hành trình phiêu lưu hướng thiện. Tác phẩm nhắc nhở mỗi chúng ta rằng: trưởng thành không phải là khi ta mạnh mẽ hơn người khác, mà là khi ta biết cúi đầu nhận lỗi và sống nhân hậu với cuộc đời."
      },
      {
        id: "nv6-so-do-tu-duy-bien-phap-tu-tu",
        grade: "Lớp 6",
        subCategory: "Thực hành Tiếng Việt",
        isWritingSkill: true,
        title: "Sơ đồ tư duy Thực hành Tiếng Việt: Ẩn dụ & Hoán dụ trong thơ văn",
        summary: "Phân biệt rõ bản chất và tác dụng biểu đạt của biện pháp tu từ Ẩn dụ (tương đồng) và Hoán dụ (tương cận) kèm công thức viết đoạn văn phân tích hiệu quả nghệ thuật.",
        tags: ["Thực hành Tiếng Việt", "Ẩn dụ & Hoán dụ", "Sơ đồ tư duy", "Kĩ năng Viết"],
        objectives: [
          "Phân biệt chính xác cơ chế chuyển nghĩa: Ẩn dụ dựa trên nét tương đồng ngầm ẩn; Hoán dụ dựa trên quan hệ gần gũi, đi đôi với nhau trong thực tế.",
          "Nhận diện nhanh 4 kiểu ẩn dụ và 4 kiểu hoán dụ thường gặp trong ngữ liệu ngoài sách giáo khoa.",
          "Vận dụng viết đoạn văn cảm thụ ngắn có sử dụng và phân tích tác dụng của biện pháp tu từ."
        ],
        mindmap: [
          "Nhánh 1 – Ẩn dụ (So sánh ngầm): Hình thức (dấu hiệu bề ngoài) • Cách thức (hành động) • Phẩm chất (tính chất) • Chuyển đổi cảm giác (thính giác sang thị giác...).",
          "Nhánh 2 – Hoán dụ (Gần gũi thực tế): Bộ phận – Toàn thể • Vật chứa – Vật bị chứa • Dấu hiệu – Sự vật • Cụ thể – Trừu tượng.",
          "Nhánh 3 – Công thức nêu tác dụng 3 bước: (1) Chỉ ra từ ngữ chứa phép tu từ -> (2) Làm nổi bật hình ảnh/nội dung gì -> (3) Thể hiện tình cảm, thái độ gì của tác giả."
        ],
        thinkingQuestions: [
          "Câu 1: Trong câu thơ 'Ngày ngày mặt trời đi qua trên lăng / Thấy một mặt trời trong lăng rất đỏ' (Viễn Phương), từ 'mặt trời' thứ hai là ẩn dụ hay hoán dụ? Vì sao?",
          "Câu 2: Trong câu 'Áo chàm đưa buổi phân li', hình ảnh 'Áo chàm' thuộc biện pháp tu từ nào?",
          "Câu 3: Hãy tự viết 2 câu văn miêu tả người mẹ hoặc thầy cô, trong đó có sử dụng ít nhất một phép ẩn dụ chuyển đổi cảm giác."
        ],
        sampleParagraph: "Khi phân tích biện pháp tu từ trong bài làm Ngữ văn, học sinh cần tránh lối liệt kê khô khan mà hãy gắn chặt tín hiệu nghệ thuật với mạch cảm xúc của văn bản. Chẳng hạn, với hình ảnh ẩn dụ 'mặt trời trong lăng rất đỏ' của nhà thơ Viễn Phương, vẻ đẹp của câu thơ không chỉ nằm ở sự tương đồng về ánh sáng ấm áp, vĩnh hằng giữa thiên nhiên và vị lãnh tụ kính yêu, mà còn kết tinh lòng biết ơn thành kính của triệu trái tim đất Việt. Nhờ phép ẩn dụ ấy, lời thơ trở nên hàm súc, ngân vang và đánh thức rung động thẩm mỹ sâu xa nơi người đọc."
      },
      {
        id: "nv7-bay-chim-chia-voi",
        grade: "Lớp 7",
        subCategory: "Đọc hiểu văn bản",
        isWritingSkill: false,
        title: "Bầy chim chìa vôi (Nguyễn Quang Thiều) – Vẻ đẹp của tình thương & sự sống",
        summary: "Lắng nghe cuộc trò chuyện hồn nhiên của hai anh em Mên và Mon trong đêm mưa bão để cảm nhận khoảnh khắc kỳ diệu khi bầy chim chìa vôi non cất cánh khỏi bãi cát giữa dòng sông.",
        tags: ["Truyện ngắn hiện đại", "Tâm hồn trẻ thơ", "Lớp 7", "Nguyễn Quang Thiều"],
        objectives: [
          "Phân tích được nét tính cách của hai anh em Mên và Mon qua ngôn ngữ đối thoại và hành động trong đêm mưa lớn.",
          "Nhận biết nghệ thuật kể chuyện kết hợp miêu tả thiên nhiên giàu chất điện ảnh và giàu chất thơ của Nguyễn Quang Thiều.",
          "Bồi đắp tình yêu thiên nhiên, lòng trắc ẩn và niềm tin vào nghị lực vươn lên của sự sống."
        ],
        mindmap: [
          "Nhánh 1 – Bối cảnh đêm mưa: Mưa xối xả, nước sông dâng cao nuốt dần dải cát giữa sông -> Nỗi lo âu mất ngủ của hai đứa trẻ.",
          "Nhánh 2 – Tâm hồn Mên & Mon: Mon giàu lòng trắc ẩn, liên tục hỏi anh; Mên tỏ vẻ chững chạc của người anh nhưng lòng cũng thương bầy chim không kém.",
          "Nhánh 3 – Khoảnh khắc cất cánh lúc bình minh: Những cánh chim bé nhỏ bứt khỏi dòng nước khổng lồ -> Hai anh em đứng lặng, bật khóc vì hạnh phúc."
        ],
        thinkingQuestions: [
          "Câu 1: Vì sao hai anh em Mên và Mon lại bật khóc khi nhìn thấy bầy chim chìa vôi non cất cánh bay lên an toàn?",
          "Câu 2: Qua cuộc đối thoại trong đêm mưa, em thấy vẻ đẹp nào trong tâm hồn trẻ thơ mà người lớn đôi khi vô tình lãng quên?",
          "Câu 3: Nghệ thuật miêu tả cảnh bầy chim cất cánh ở cuối truyện gợi cho em suy nghĩ gì về sức mạnh của tình mẫu tử và bản năng sinh tồn?"
        ],
        sampleParagraph: "Khoảnh khắc bầy chim chìa vôi non bứt mình khỏi mặt nước sông đang cuồn cuộn chảy để bay lên trong ánh bình minh là một trong những khung hình đẹp và xúc động nhất của văn học thiếu nhi Việt Nam. Dưới ngòi bút tinh tế của Nguyễn Quang Thiều, đôi cánh mỏng manh của bầy chim nhỏ bé đã chiến thắng dòng nước lũ hung dữ bằng nghị lực sống phi thường và tình yêu thương che chở của chim bố, chim mẹ. Chứng kiến cảnh tượng kỳ diệu ấy, hai anh em Mên và Mon đứng lặng đi rồi bật khóc mà không hề hay biết. Đó là những giọt nước mắt trong trẻo nhất của lòng nhân hậu – khi con người biết run lên vì lo lắng cho một sinh linh bé nhỏ và vỡ òa hạnh phúc trước sự toàn thắng của sự sống."
      },
      {
        id: "nv7-bieu-cam-con-nguoi-su-viec",
        grade: "Lớp 7",
        subCategory: "Kĩ năng Viết",
        isWritingSkill: true,
        title: "Kĩ năng Viết bài văn biểu cảm về con người hoặc sự việc giàu cảm xúc",
        summary: "Hướng dẫn học sinh Lớp 7 cách chọn chi tiết kỷ niệm đắt giá, kết hợp yếu tố tự sự, miêu tả để bộc lộ tình cảm chân thành, tránh lối kể lể sáo rỗng.",
        tags: ["Văn biểu cảm", "Kĩ năng Viết", "Lớp 7", "Dàn ý chi tiết"],
        objectives: [
          "Nắm vững bố cục 3 phần của bài văn biểu cảm về một người thân yêu (ông bà, cha mẹ, thầy cô, bạn bè) hoặc một sự việc để lại ấn tượng sâu sắc.",
          "Biết cách dùng yếu tố tự sự và miêu tả làm 'điểm tựa' để khơi gợi cảm xúc thay vì chỉ kể lại sự việc thuần túy.",
          "Sử dụng linh hoạt từ ngữ cảm thán, câu hỏi tu từ, điệp ngữ để tạo giọng điệu tha thiết, truyền cảm."
        ],
        mindmap: [
          "Mở bài: Dẫn dắt từ một tín hiệu gợi nhớ (mùi hương, tiếng trống trường, mái tóc bạc...) -> Giới thiệu đối tượng và cảm xúc chủ đạo.",
          "Thân bài: (1) Ấn tượng sâu đậm nhất về hình dáng, ánh mắt, nụ cười -> (2) Hồi tưởng một kỷ niệm chạm đến trái tim -> (3) Suy ngẫm về ý nghĩa của người/sự việc đối với sự trưởng thành của em.",
          "Kết bài: Khẳng định lại tình cảm bền chặt và lời hứa tự hoàn thiện bản thân."
        ],
        thinkingQuestions: [
          "Câu 1: Làm thế nào để đoạn văn biểu cảm không bị biến thành một đoạn văn kể chuyện thông thường?",
          "Câu 2: Nếu viết về mẹ hoặc cô giáo, em sẽ chọn chi tiết nhỏ nào (đôi bàn tay, giọng nói, ánh mắt...) làm điểm nhấn xuyên suốt bài viết?",
          "Câu 3: Hãy thử viết một câu mở bài dẫn dắt từ hình ảnh 'bụi phấn trắng rơi trên bục giảng'."
        ],
        sampleParagraph: "Có những điều bình dị đến mức khi còn ở bên, ta cứ ngỡ là lẽ thường nhiên, chỉ đến khi ngoảnh lại mới thấy lòng rưng rưng thương nhớ. Với em, đó là dáng hình của ngoại mỗi chiều ngồi nhặt rau bên hiên nhà đầy nắng gió. Đôi bàn tay ngoại gầy guộc, nổi những đường gân xanh như những nhánh sông quê đã tần tảo nuôi lớn cả tuổi thơ em bằng lời ru ngọt lành và mùi trầu cay nồng ấm. Mỗi lần áp má vào lưng áo nâu sờn vai của ngoại, mọi giông bão ngoài kia dường như đều dừng lại sau cánh cổng tre. Ngoại chính là khoảng trời bình yên nhất, dạy em bài học đầu tiên về sự nhẫn nại và lòng bao dung."
      },
      {
        id: "nv8-truyen-truyen-ki-va-tho-duong-luat",
        grade: "Lớp 8",
        subCategory: "Đọc hiểu văn bản",
        isWritingSkill: false,
        title: "Chuyên đề Truyện truyền kì & Thơ Đường luật (Ngữ văn 8)",
        summary: "Hệ thống hóa thi pháp Thơ Đường luật (Thất ngôn bát cú, Tứ tuyệt) và yếu tố kỳ ảo trong Truyện truyền kì giúp học sinh Lớp 8 giải mã nhanh các văn bản văn học trung đại.",
        tags: ["Thơ Đường luật", "Truyện truyền kì", "Lớp 8", "Văn học trung đại"],
        objectives: [
          "Nắm chắc quy tắc niêm, luật, vần, đối và bố cục Đề – Thực – Luận – Kết của bài thơ Thất ngôn bát cú Đường luật.",
          "Hiểu được vai trò của yếu tố kỳ ảo (kỳ nhân, kỳ sự, kỳ vật) trong truyện truyền kì: dùng cái kỳ ảo để phản ánh hiện thực và gửi gắm khát vọng công lý.",
          "Cảm nhận vẻ đẹp tâm hồn, khí phách và nỗi niềm ưu thời mẫn thế của các bậc tiền nhân."
        ],
        mindmap: [
          "Nhánh 1 – Thơ Đường luật: Bố cục 4 phần (Hai câu Đề – Hai câu Thực – Hai câu Luận – Hai câu Kết) • Nghệ thuật Đối thanh và Đối ý ở頷 liên (3-4) & Cảnh liên (5-6).",
          "Nhánh 2 – Truyện truyền kì: Cốt truyện giàu kịch tính • Sự đan xen giữa cõi thực và cõi mộng/thần tiên • Nhân vật thường là người phụ nữ đức hạnh hoặc kẻ sĩ có khí tiết.",
          "Nhánh 3 – Giá trị nhân văn: Tiếng nói bênh vực số phận con người và ngợi ca tình yêu quê hương, đất nước."
        ],
        thinkingQuestions: [
          "Câu 1: Nghệ thuật đối trong hai câu Thực và hai câu Luận của thơ Đường luật có tác dụng gì trong việc khắc họa bức tranh thiên nhiên và tâm trạng nhà thơ?",
          "Câu 2: Vì sao các tác giả truyện truyền kì trung đại lại mượn yếu tố thần linh, kỳ ảo để giải quyết bi kịch của nhân vật?",
          "Câu 3: Khi đọc một bài thơ Đường luật chữ Hán, vì sao ta cần đối chiếu kỹ bản phiên âm, bản dịch nghĩa và bản dịch thơ?"
        ],
        sampleParagraph: "Đến với những trang Thơ Đường luật và Truyện truyền kì trong chương trình Ngữ văn 8, người đọc như được bước vào một không gian nghệ thuật vừa trang trọng, cổ điển vừa chan chứa tình đời. Nếu thơ Đường luật cuốn hút bởi vẻ đẹp hàm súc 'ý tại ngôn ngoại' trong khuôn khổ niêm luật chặt chẽ, nơi mỗi cặp câu đối xứng mở ra cả một vũ trụ tâm tình, thì truyện truyền kì lại dùng những phép màu kỳ ảo để xoa dịu nỗi đau trần thế và đòi lại công bằng cho những kiếp người nhỏ bé. Hiểu được quy luật thể loại chính là chiếc chìa khóa giúp các em mở cánh cửa tâm hồn để đồng cảm sâu sắc cùng cha ông."
      },
      {
        id: "nv8-noi-va-nghe-trinh-bay-y-kien",
        grade: "Lớp 8",
        subCategory: "Nói và Nghe",
        isWritingSkill: false,
        title: "Kĩ năng Nói và Nghe: Trình bày ý kiến về một vấn đề xã hội thuyết phục",
        summary: "Bí quyết làm chủ giọng điệu, ngôn ngữ cơ thể và cấu trúc lập luận 3 bước giúp học sinh Lớp 8 tự tin thuyết trình và phản biện trước tập thể.",
        tags: ["Nói và Nghe", "Thuyết trình", "Phản biện", "Lớp 8"],
        objectives: [
          "Xây dựng được đề cương bài nói ngắn gọn theo cấu trúc: Mở đầu thu hút – Nội dung có luận điểm & bằng chứng – Kết thúc đọng lại thông điệp.",
          "Điều chỉnh tốc độ nói, âm lượng, ánh mắt giao tiếp và cử chỉ tay tự nhiên, làm chủ tâm lý hồi hộp.",
          "Biết lắng nghe tích cực, ghi chép ý chính và đặt câu hỏi phản biện lịch sự, tôn trọng sự khác biệt."
        ],
        mindmap: [
          "Bước 1 – Chuẩn bị trước khi nói: Xác định mục đích & người nghe • Lập dàn ý trên thẻ Từ khóa (Keyword Cards) thay vì cầm giấy đọc chép.",
          "Bước 2 – Thực hành trình bày: Mở đầu bằng câu hỏi/con số/tình huống thực tế • Triển khai: Luận điểm rõ ràng + Dẫn chứng đời sống • Kết thúc bằng lời kêu gọi hành động.",
          "Bước 3 – Trao đổi & Phản hồi: Công thức 'Khen – Góp ý – Đặt câu hỏi mở' giúp giờ thảo luận sôi nổi, văn minh."
        ],
        thinkingQuestions: [
          "Câu 1: Sự khác biệt lớn nhất giữa ngôn ngữ viết trong bài văn nghị luận và ngôn ngữ nói trong bài thuyết trình trước lớp là gì?",
          "Câu 2: Khi gặp một ý kiến phản biện trái chiều từ bạn cùng lớp, em nên bắt đầu câu trả lời như thế nào để vừa giữ thái độ cầu thị vừa bảo vệ được lập luận của mình?",
          "Câu 3: Hãy thử viết 3 câu mở đầu thật ấn tượng cho bài nói về chủ đề: 'Sử dụng mạng xã hội thông minh ở lứa tuổi học đường'."
        ],
        sampleParagraph: "Kính chào cô giáo và các bạn! Trước khi bắt đầu bài trình bày hôm nay, mình muốn hỏi các bạn một câu nhỏ: Sáng nay khi thức dậy, thứ đầu tiên các bạn chạm tay vào là trang sách mới hay màn hình điện thoại thông minh? Chắc hẳn không ít bạn mỉm cười vì thấy hình ảnh của chính mình trong đó. Công nghệ số đang mở ra cho thế hệ học sinh chúng ta một kho tàng tri thức vô tận, nhưng đồng thời cũng đặt ra thử thách lớn về khả năng làm chủ thời gian và cảm xúc. Hôm nay, mình xin chia sẻ ba góc nhìn thực tế để chúng ta làm chủ thế giới ảo thay vì để mạng xã hội dẫn dắt cuộc sống thật của mình."
      },
      {
        id: "nv9-bi-kich-nguoi-phu-nu-chuyen-nguoi-con-gai-nam-xuong",
        grade: "Lớp 9",
        subCategory: "Đọc hiểu văn bản",
        isWritingSkill: false,
        title: "Chuyện người con gái Nam Xương (Nguyễn Dữ) – Vẻ đẹp và bi kịch Vũ Nương",
        summary: "Phân tích sâu sắc phẩm chất công – dung – ngôn – hạnh của Vũ Nương, chi tiết nghệ thuật 'chiếc bóng trên vách' và giá trị nhân đạo cao cả trong kiệt tác Truyền kì mạn lục.",
        tags: ["Truyện truyền kì", "Lớp 9", "Nguyễn Dữ", "Ôn thi vào 10"],
        objectives: [
          "Phân tích được vẻ đẹp phẩm chất của Vũ Nương trong các mối quan hệ: người vợ thủy chung, người con dâu hiếu thảo, người mẹ giàu tình thương.",
          "Đánh giá được vai trò đắt giá của chi tiết 'chiếc bóng trên tường' trong việc thắt nút và mở nút câu chuyện.",
          "Làm rõ giá trị hiện thực (tố cáo xã hội nam quyền, chiến tranh phi nghĩa) và giá trị nhân đạo sâu sắc của Nguyễn Dữ."
        ],
        mindmap: [
          "Nhánh 1 – Vẻ đẹp Vũ Nương: Khi tiễn chồng (không mong ấn phong hầu, chỉ mong bình an) • Khi xa chồng (nuôi con, phụng dưỡng mẹ già trọn đạo) • Khi bị nghi oan (lấy cái chết chứng minh tiết hạnh).",
          "Nhánh 2 – Nguyên nhân bi kịch: Trực tiếp (lời nói ngây thơ của bé Đản + chiếc bóng + tính đa nghi gia trưởng của Trương Sinh) • Sâu xa (chiến tranh phong kiến và lễ giáo bất công).",
          "Nhánh 3 – Chi tiết kỳ ảo cuối truyện: Vũ Nương hiện về trên bến Hoàng Giang rực rỡ nhưng không thể trở lại trần gian -> Khát vọng giải oan nhưng bi kịch vẫn còn nguyên tính thời sự."
        ],
        thinkingQuestions: [
          "Câu 1: Nếu không có chi tiết 'chiếc bóng trên vách', câu chuyện của Vũ Nương có đạt tới chiều sâu bi kịch như Nguyễn Dữ đã xây dựng không? Vì sao?",
          "Câu 2: Vì sao ở cuối truyện, dù đã được Trương Sinh lập đàn giải oan, Vũ Nương chỉ hiện về giữa dòng sông nói lời cảm tạ rồi biến mất chứ không quay về sum họp?",
          "Câu 3: Từ bi kịch của gia đình Trương Sinh – Vũ Nương, tác phẩm gửi gắm bài học gì về sự lắng nghe và niềm tin trong hạnh phúc gia đình hôm nay?"
        ],
        sampleParagraph: "Trong 'Chuyện người con gái Nam Xương', chi tiết 'chiếc bóng trên vách' là một sáng tạo nghệ thuật đặc sắc của Nguyễn Dữ, đóng vai trò như chiếc bản lề khép mở toàn bộ bi kịch đời nàng Vũ Nương. Khi Trương Sinh đi lính nơi biên ải, chiếc bóng của chính Vũ Nương dưới ánh đèn đêm là biểu tượng cảm động cho nỗi nhớ chồng da diết và tấm lòng người mẹ muốn bù đắp sự thiếu vắng tình cha cho đứa con thơ. Thế nhưng, trớ trêu thay, chính cái bóng vô tri ấy qua lời nói ngây thơ của bé Đản và thói ghen tuông mù quáng của Trương Sinh lại hóa thành lưỡi dao định mệnh đẩy người phụ nữ đức hạnh xuống dòng Hoàng Giang lạnh lẽo. Khi Trương Sinh tự mình ngồi trước ngọn đèn đêm và hiểu ra sự thật thì mọi thứ đã muộn màng. Chiếc bóng vừa thắt nút, vừa mở nút, để lại bài học thấm thía muôn đời: đừng bao giờ để sự hồ đồ và thiếu lắng nghe đánh mất những điều trân quý nhất."
      },
      {
        id: "nv9-ki-nang-viet-nghi-luan-xa-hoi-thuyet-phuc",
        grade: "Lớp 9",
        subCategory: "Kĩ năng Viết",
        isWritingSkill: true,
        title: "Kĩ năng Viết bài văn Nghị luận xã hội thuyết phục & Sâu sắc (Ôn thi vào 10)",
        summary: "Phương pháp lập dàn ý 5 bước, kỹ thuật phản đề đa chiều và cách chọn dẫn chứng thực tế thời sự giúp bài văn Nghị luận xã hội Lớp 9 đạt điểm tối đa.",
        tags: ["Nghị luận xã hội", "Kĩ năng Viết", "Lớp 9", "Ôn thi vào 10"],
        objectives: [
          "Nắm vững quy trình triển khai bài văn Nghị luận xã hội về một tư tưởng đạo lý hoặc một vấn đề đời sống: Giải thích – Bàn luận – Chứng minh – Mở rộng/Phản đề – Bài học nhận thức & hành động.",
          "Biết cách lật ngược vấn đề (Phản đề) để bài viết thể hiện tư duy biện chứng, không một chiều, giáo điều.",
          "Lựa chọn dẫn chứng tiêu biểu, xác thực, giàu cảm xúc và phân tích dẫn chứng gắn chặt với luận điểm."
        ],
        mindmap: [
          "Bước 1 – Giải thích & Nêu vấn đề: Giải thích từ khóa/hình ảnh ẩn dụ -> Rút ra vấn đề nghị luận ngắn gọn, chuẩn xác.",
          "Bước 2 – Phân tích & Bàn luận (Vì sao? Biểu hiện? Ý nghĩa?): Xét trên 2 bình diện: Đối với cá nhân và Đối với cộng đồng/xã hội.",
          "Bước 3 – Dẫn chứng & Phản đề: Chọn 1-2 tấm gương thực tế (khoa học, văn hóa, đời thường) • Phê phán biểu hiện lệch lạc và đặt vấn đề ở góc nhìn toàn diện.",
          "Bước 4 – Bài học liên hệ: Tránh hô khẩu hiệu chung chung; nêu hành động cụ thể của bản thân từ những việc nhỏ nhất."
        ],
        thinkingQuestions: [
          "Câu 1: Làm thế nào để phần 'Bài học nhận thức và hành động' ở cuối bài Nghị luận xã hội tạo được dấu ấn riêng thay vì lặp lại những câu sáo rỗng?",
          "Câu 2: Khi bàn về 'Lòng tốt và sự thấu cảm', em sẽ mở rộng (phản đề) như thế nào để thấy lòng tốt cần đi kèm với sự tỉnh táo và tôn trọng phẩm giá người nhận?",
          "Câu 3: Hãy viết một đoạn văn khoảng 150 chữ bàn về: 'Giá trị của những khoảng lặng trong cuộc sống hiện đại'."
        ],
        sampleParagraph: "Giữa nhịp sống hối hả của kỷ nguyên số, khi con người luôn sợ mình bị bỏ lại phía sau, 'những khoảng lặng' đôi khi bị xem là sự lãng phí thời gian. Thế nhưng, cũng giống như một bản nhạc không thể thiếu những nốt lặng để tạo nên chiều sâu giai điệu, tâm hồn con người cũng cần những phút giây tĩnh tại để lắng nghe chính mình. Khoảng lặng không phải là sự trốn chạy thực tại hay lười biếng buông xuôi, mà là quãng nghỉ cần thiết để ta chiêm nghiệm lại những bước đã qua, gạn đục khơi trong và nạp đầy năng lượng sáng tạo. Một buổi chiều khép màn hình điện thoại để đọc một trang sách hay, hay mười phút trò chuyện thật tâm cùng cha mẹ sau bữa cơm tối chính là những khoảng lặng quý giá giúp ta giữ được sự cân bằng và lòng nhân hậu giữa dòng đời vội vã."
      }
    ];

    /* ========================================================================
       3. CƠ SỞ DỮ LIỆU 4 CHUYÊN ĐỀ ĐỒNG NGHIỆP & ĐỔI MỚI SƯ PHẠM
       ======================================================================== */
    const COLLEAGUE_TOPICS = [
      {
        id: "chuyen-de-1",
        number: "01",
        badge: "Công văn 5512",
        title: "Thiết kế Kế hoạch bài dạy Ngữ văn theo Công văn 5512 tinh gọn, hiệu quả",
        desc: "Cách cấu trúc 4 hoạt động (Khởi động, Hình thành kiến thức, Luyện tập, Vận dụng) rõ mục tiêu, rõ sản phẩm học tập, tránh hình thức và giảm tải áp lực hồ sơ cho giáo viên.",
        contentBlocks: [
          {
            heading: "🎯 Nguyên tắc cốt lõi khi soạn KHBD theo CV 5512",
            items: [
              "Mỗi hoạt động học tập phải xác định rõ 4 yếu tố: (1) Mục tiêu, (2) Nội dung nhiệm vụ cụ thể học sinh phải thực hiện, (3) Sản phẩm học tập có thể quan sát/đánh giá được, (4) Tổ chức thực hiện (Chuyển giao – Thực hiện – Báo cáo – Kết luận).",
              "Chuyển từ 'Giáo viên giảng cái mình có' sang 'Tổ chức cho học sinh khám phá đặc trưng thể loại để tự đọc hiểu văn bản mới'.",
              "Tinh gọn phần lời dẫn của giáo viên, tập trung thiết kế Phiếu học tập (Worksheet) ngắn gọn, rõ lệnh hỏi."
            ]
          },
          {
            heading: "📋 Cấu trúc mẫu 1 tiết Đọc hiểu văn bản (45 phút)",
            items: [
              "Hoạt động 1 – Khởi động (5 phút): Kết nối trải nghiệm cá nhân của học sinh với chủ đề bài học qua 1 bức tranh, 1 câu hỏi tình huống hoặc đoạn âm thanh ngắn.",
              "Hoạt động 2 – Hình thành kiến thức (25 phút): Chia thành 2 nhiệm vụ trọng tâm (Đọc tri thức thể loại & Khám phá giá trị nội dung - nghệ thuật qua thảo luận cặp đôi/nhóm nhỏ).",
              "Hoạt động 3 & 4 – Luyện tập & Vận dụng (15 phút): Viết đoạn văn ngắn 5–7 câu kết nối đọc – viết ngay tại lớp."
            ]
          }
        ],
        sampleNote: "Cô Hòa Đồng sẵn sàng chia sẻ mẫu Kế hoạch bài dạy Ngữ văn 6, 7, 8, 9 định dạng Word chỉnh sửa được. Quý thầy cô có thể bấm nút Zalo bên dưới để nhận bộ mẫu tham khảo."
      },
      {
        id: "chuyen-de-2",
        number: "02",
        badge: "Công nghệ số & AI",
        title: "Ứng dụng AI & Công cụ số tạo hình ảnh trực quan, video dẫn nhập cho tiết dạy Văn",
        desc: "Bộ câu lệnh (Prompt) thực chiến giúp giáo viên Ngữ văn tái hiện bối cảnh lịch sử, chân dung nhân vật văn học và tạo trò chơi tương tác mở đầu tiết học đầy hứng khởi.",
        contentBlocks: [
          {
            heading: "✨ 3 ứng dụng AI thiết thực nhất cho Giáo viên Ngữ văn",
            items: [
              "Trực quan hóa bối cảnh tác phẩm: Tạo tranh minh họa phong cách水mặc/sơn dầu cho các tác phẩm trung đại (Chuyện người con gái Nam Xương, Hoàng Lê nhất thống chí, Thơ Đường luật) để học sinh dễ hình dung không gian nghệ thuật.",
              "Xây dựng ngữ liệu đọc hiểu tương đương ngoài SGK: Nhờ AI gợi ý các văn bản cùng thể loại, sau đó giáo viên biên tập lại và thiết kế ma trận câu hỏi trắc nghiệm – tự luận.",
              "Tạo video hoạt cảnh ngắn 30–45 giây cho phần Khởi động giúp thu hút sự chú ý của học sinh ngay từ những phút đầu tiên."
            ]
          },
          {
            heading: "💡 Lưu ý sư phạm khi đưa AI vào lớp học",
            items: [
              "Công nghệ chỉ là phương tiện dẫn đường; cảm xúc từ giọng đọc truyền cảm của thầy cô và sự rung động trước ngôn từ văn chương vẫn là linh hồn của tiết học.",
              "Hướng dẫn học sinh sử dụng AI để gợi mở ý tưởng và kiểm tra lỗi chính tả, tuyệt đối không dùng AI viết hộ bài văn."
            ]
          }
        ],
        sampleNote: "Quý đồng nghiệp muốn trao đổi bộ câu lệnh (Prompt) thiết kế hình ảnh minh họa bài giảng Ngữ văn THCS có thể kết nối trực tiếp qua Zalo 0983507192."
      },
      {
        id: "chuyen-de-3",
        number: "03",
        badge: "Phương pháp dạy học",
        title: "Phương pháp tổ chức hoạt động 'Nói và Nghe' giúp học sinh tự tin, hết rụt rè",
        desc: "Kỹ thuật tổ chức sân khấu hóa nhỏ, đóng vai phóng viên văn học và kỹ thuật phản hồi tích cực 'Chiếc bánh kẹp' giúp mọi học sinh đều hào hứng lên tiếng.",
        contentBlocks: [
          {
            heading: "🎤 Giải pháp khắc phục tình trạng học sinh ngại nói hoặc 'đọc văn bản'",
            items: [
              "Quy tắc 'Thẻ từ khóa trong lòng bàn tay': Thay vì cho phép học sinh mang cả quyển vở lên bục giảng đọc nguyên văn, giáo viên hướng dẫn các em tóm tắt bài nói thành 5 từ khóa lớn trên một tấm thẻ nhỏ.",
              "Đa dạng hóa hình thức Nói và Nghe: Talkshow văn học, Phiên tòa giả định (Ví dụ: Bảo vệ Vũ Nương), Phóng viên nhí phỏng vấn nhân vật Dế Mèn.",
              "Khởi động từ nhóm đôi (Think – Pair – Share) trước khi mời học sinh trình bày trước cả lớp để giảm áp lực tâm lý."
            ]
          },
          {
            heading: "💬 Kỹ thuật phản hồi 'Chiếc bánh kẹp' (Sandwich Feedback)",
            items: [
              "Lớp 1 (Khen ngợi cụ thể): Ghi nhận sự tự tin, giọng nói rõ ràng hoặc một ý tưởng sáng tạo của học sinh.",
              "Lớp 2 (Góp ý xây dựng): Gợi ý điều chỉnh tốc độ nói, ánh mắt giao tiếp hoặc bổ sung dẫn chứng.",
              "Lớp 3 (Khích lệ): Khẳng định sự tiến bộ của học sinh so với tiết học trước."
            ]
          }
        ],
        sampleNote: "Khi học sinh cảm thấy an toàn và được lắng nghe không phán xét, tiết Nói và Nghe sẽ trở thành giờ học được mong đợi nhất trong tuần."
      },
      {
        id: "chuyen-de-4",
        number: "04",
        badge: "Kiểm tra & Đánh giá",
        title: "Bộ tiêu chí (Rubric) chấm bài viết và nghệ thuật viết lời phê khích lệ học sinh",
        desc: "Xây dựng bảng kiểm (Checklist) và thang đo Rubric minh bạch cho từng kiểu bài viết, kết hợp những lời phê ấm áp giúp học sinh nhận ra điểm mạnh và hướng sửa bài.",
        contentBlocks: [
          {
            heading: "📊 Cấu trúc Rubric chấm bài Viết chuẩn CT GDPT 2018 (Thang 10 điểm)",
            items: [
              "Tiêu chí 1 – Đảm bảo cấu trúc & đặc trưng kiểu bài (2.0 điểm): Đủ 3 phần Mở – Thân – Kết, đúng yêu cầu thể loại (tự sự, biểu cảm, nghị luận, thuyết minh).",
              "Tiêu chí 2 – Nội dung & Hệ thống ý (5.0 điểm): Luận điểm rõ ràng, cảm xúc chân thành, dẫn chứng xác thực, có suy nghĩ riêng sâu sắc.",
              "Tiêu chí 3 – Diễn đạt, Chính tả & Ngữ pháp (2.0 điểm): Dùng từ chính xác, câu văn mạch lạc, giàu hình ảnh.",
              "Tiêu chí 4 – Sáng tạo (1.0 điểm): Có cách mở bài/kết bài độc đáo, liên hệ thực tế giàu sức thuyết phục."
            ]
          },
          {
            heading: "✍️ Nghệ thuật viết lời phê truyền động lực",
            items: [
              "Thay vì phê ngắn gọn 'Diễn đạt lủng củng, cần cố gắng', hãy chỉ rõ: 'Cô rất thích chi tiết kỷ niệm về đôi bàn tay mẹ ở đoạn 2 của em – rất chân thật! Ở đoạn 3, em chỉ cần tách câu dài thành hai câu ngắn là mạch văn sẽ sáng rõ hơn nhiều.'",
              "Biến mỗi lời phê của cô giáo thành một cuộc trò chuyện riêng tư đầy trân trọng giữa thầy và trò."
            ]
          }
        ],
        sampleNote: "Bộ bảng kiểm tự đánh giá và đánh giá đồng đẳng (Peer-assessment) giúp học sinh tự rà soát bài viết trước khi nộp."
      }
    ];

    /* ========================================================================
       4. CƠ SỞ DỮ LIỆU 3 BÀI TẢN VĂN & TRUYỀN CẢM HỨNG
       ======================================================================== */
    const ESSAYS_DATA = [
      {
        id: "tan-van-1",
        audience: "Gửi các em học sinh trước kỳ thi",
        title: "Đừng sợ trang giấy trắng – Hãy viết bằng trái tim biết rung động",
        readingTime: "4 phút đọc",
        excerpt: "“Mỗi khi ngồi trước tờ giấy thi còn thơm mùi mực mới, cô biết có những đôi bàn tay nhỏ bé đang run lên vì lo lắng. Nhưng các em ơi, văn chương chưa bao giờ là cuộc thi xem ai thuộc lòng nhiều hơn...”",
        fullContent: [
          "Mỗi mùa phượng nở hay những ngày gió heo may báo hiệu kỳ thi học kỳ, thi chuyển cấp đang về, cô thường bắt gặp ánh mắt lo âu của các em sau giờ tan học: 'Cô ơi, nhỡ vào phòng thi em quên mất văn mẫu thì sao ạ?'. Mỗi lần nghe câu hỏi ấy, cô vừa thương vừa muốn nắm lấy bàn tay các em để truyền thêm một chút bình yên.",
          "Các em yêu quý, trang giấy trắng trong phòng thi không phải là một giám khảo khắt khe đang chờ bắt lỗi, mà là một người bạn tri kỷ đang kiên nhẫn lắng nghe tiếng nói từ tâm hồn em. Học Văn theo chương trình mới không còn là những cuộc đua chép lại lời người khác. Điều người chấm bài mong chờ nhất không phải là những câu chữ bóng bẩy sáo rỗng, mà là suy nghĩ chân thật, là sự thấu cảm của riêng em trước nỗi đau của nàng Vũ Nương, trước giọt nước mắt ăn năn của Dế Mèn hay trước một vấn đề của đời sống hôm nay.",
          "Khi bình tĩnh hít một hơi thật sâu, đọc kỹ từng chữ trong đề bài, gạch chân các từ khóa và lập một dàn ý nhỏ ngoài giấy nháp, em sẽ thấy mạch chữ tự nhiên tuôn chảy. Hãy viết bằng những gì em đã đọc, đã quan sát và đã sống. Chỉ cần em đặt sự chân thành vào từng câu chữ, bài văn của em chắc chắn sẽ chạm tới trái tim người đọc. Cô luôn tin ở các em!"
        ]
      },
      {
        id: "tan-van-2",
        audience: "Gửi người đồng nghiệp thương quý",
        title: "Giữ ngọn lửa ấm dưới bụi phấn trắng",
        readingTime: "5 phút đọc",
        excerpt: "“Có những chiều thu xếp lại chồng vở chấm muộn khi sân trường đã vắng lặng, ta chợt mỉm cười vì một câu văn ngây ngô mà trong trẻo đến lạ kỳ của học trò...”",
        fullContent: [
          "Làm giáo viên dạy Văn ở bậc Trung học cơ sở là đồng hành cùng các em trong quãng thời gian đẹp đẽ nhưng cũng nhiều biến động nhất của tuổi dậy thì. Có những ngày giọng khàn đặc sau bốn tiết giảng liền, có những đêm thức khuya bên chồng bài viết còn vương nét chữ nghiêng ngả, đôi lúc sự mệt mỏi của công việc hành chính tưởng chừng làm vơi đi ít nhiều sự lãng mạn thuở mới vào nghề.",
          "Thế nhưng, chỉ cần sáng hôm sau bước vào lớp, bắt gặp những ánh mắt trong veo đang ngước nhìn lên bục giảng khi ta cất giọng đọc một khổ thơ, hay đọc được một dòng tâm sự thật thà của học trò ở cuối bài kiểm tra: 'Em cảm ơn cô vì tiết Văn hôm qua đã giúp em hiểu mẹ nhiều hơn', mọi nhọc nhằn bỗng tan biến như sương sớm.",
          "Nghề dạy Văn cho chúng ta một đặc ân vô giá: được sống mãi cùng cái đẹp của ngôn từ và sự tươi mới của tuổi trẻ. Dù thời đại công nghệ số và trí tuệ nhân tạo có phát triển đến đâu, vẫn không một cỗ máy nào thay thế được ánh mắt khích lệ, cái gật đầu ấm áp và ngọn lửa nhân văn mà người thầy truyền sang học trò. Chúc quý đồng nghiệp của tôi luôn giữ mãi trái tim ấm nóng và niềm hạnh phúc dịu dàng trên mỗi trang giáo án."
        ]
      },
      {
        id: "tan-van-3",
        audience: "Gửi phụ huynh & người yêu văn chương",
        title: "Một trang sách mở ra trong mỗi nếp nhà",
        readingTime: "4 phút đọc",
        excerpt: "“Giữa thời đại của những thước phim ngắn lướt qua trong vài giây, việc cha mẹ cùng con đọc chậm một trang sách mỗi tối chính là món quà nuôi dưỡng tâm hồn bền vững nhất...”",
        fullContent: [
          "Nhiều bậc phụ huynh thường nhắn tin hỏi cô: 'Làm sao để con thích học Văn và biết diễn đạt suy nghĩ của mình hả cô? Con ở nhà kiệm lời và chỉ thích nhìn màn hình điện thoại thôi'. Câu trả lời thực ra không nằm ở những lớp học thêm căng thẳng, mà bắt đầu từ chính không gian trò chuyện và văn hóa đọc trong mỗi gia đình.",
          "Ngôn từ của một đứa trẻ được bồi đắp từ những câu chuyện ông bà kể, từ những bữa cơm tối cha mẹ kiên nhẫn lắng nghe con kể chuyện trường lớp mà không vội vàng phán xét, và từ những cuốn sách đặt ở góc bàn phòng khách. Khi một đứa trẻ thấy cha mẹ nâng niu một cuốn sách hay, cùng con bàn luận về một nhân vật giàu nghị lực, tâm hồn con sẽ tự nhiên mở rộng biên độ cảm xúc.",
          "Văn chương không ở đâu xa. Văn chương hiện diện trong lời cảm ơn chân thành, lời xin lỗi đúng lúc và sự dịu dàng ta dành cho nhau mỗi ngày. Hãy cùng nhà trường gieo vào lòng con những hạt mầm của lòng trắc ẩn qua từng trang sách nhỏ hôm nay."
        ]
      }
    ];

    /* ========================================================================
       5. CƠ SỞ DỮ LIỆU HỘP TRÍCH DẪN & ĐỐ VUI VĂN HỌC NHANH
       ======================================================================== */
    const LITERARY_QUOTES = [
      {
        text: "“Văn học nằm ngoài những định luật của sự băng hoại. Chỉ mình nó không thừa nhận cái chết.”",
        author: "M. E. Saltykov-Shchedrin"
      },
      {
        text: "“Một tác phẩm nghệ thuật là kết quả của tình yêu. Tình yêu con người, ước mơ cháy bỏng vì một xã hội công bằng, bình đẳng bắc ái luôn luôn thôi thúc các nhà văn sống và viết.”",
        author: "Lê Ngọc Trà"
      },
      {
        text: "“Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn rồi cũng mang vạ vào mình đấy.”",
        author: "Tô Hoài (Dế Mèn phiêu lưu kí – Ngữ văn 6)"
      },
      {
        text: "“Nhà văn tồn tại ở trên đời trước hết để làm công việc giống như kẻ nâng giấc cho những con người bị cùng đường, tuyệt lộ, bị cái ác hoặc số phận đen đủi dồn đến chân tường.”",
        author: "Nguyễn Minh Châu"
      },
      {
        text: "“Thơ chính là tâm hồn. Thơ khởi nguyên từ tâm hồn, đi qua tâm hồn và đọng lại ở tâm hồn.”",
        author: "Lời nhắn từ Góc Văn Chương Cô Hòa Đồng"
      },
      {
        text: "“Mỗi bài văn hay không bắt đầu từ những từ ngữ hoa mỹ, mà bắt đầu từ một đôi mắt biết quan sát và một trái tim biết rung động trước cuộc đời.”",
        author: "Cô Hòa Đồng – Giáo viên Ngữ văn THCS"
      }
    ];

    const LITERARY_QUIZ = [
      {
        question: "Câu 1: Trong đoạn trích 'Bài học đường đời đầu tiên' (Ngữ văn 6), tác giả Tô Hoài đã sử dụng ngôi kể nào để thuật lại câu chuyện?",
        options: [
          "A. Ngôi thứ nhất (Nhân vật Dế Mèn tự xưng 'tôi')",
          "B. Ngôi thứ ba (Người kể chuyện giấu mặt)",
          "C. Ngôi thứ nhất số nhiều (Xưng 'chúng tôi')",
          "D. Kết hợp ngôi thứ hai và ngôi thứ ba"
        ],
        correctIndex: 0,
        explanation: "Chính xác! Việc để Dế Mèn tự xưng 'tôi' kể lại câu chuyện giúp nhân vật bộc lộ trực tiếp tâm lý kiêu ngạo ban đầu và sự ăn năn chân thành sau cái chết của Dế Choắt."
      },
      {
        question: "Câu 2: Trong bài thơ 'Thất ngôn bát cú Đường luật' (Ngữ văn 8), hai cặp câu nào bắt buộc phải tuân thủ quy tắc Đối (đối thanh và đối ý)?",
        options: [
          "A. Hai câu Đề (1-2) và hai câu Kết (7-8)",
          "B. Hai câu Thực (3-4) và hai câu Luận (5-6)",
          "C. Hai câu Đề (1-2) và hai câu Thực (3-4)",
          "D. Tất cả 8 câu trong bài thơ"
        ],
        correctIndex: 1,
        explanation: "Tuyệt vời! Trong thơ Thất ngôn bát cú Đường luật, cặp câu Thực (câu 3-4) và cặp câu Luận (câu 5-6) là hai cặp câu bắt buộc phải đối nhau."
      },
      {
        question: "Câu 3: Chi tiết nghệ thuật nào giữ vai trò 'thắt nút' và 'mở nút' cho bi kịch của Vũ Nương trong 'Chuyện người con gái Nam Xương' (Ngữ văn 9)?",
        options: [
          "A. Chiếc trâm vàng Vũ Nương gửi Phan Lang",
          "B. Chiếc bóng trên vách tường dưới ánh đèn đêm",
          "C. Đàn giải oan bên bến Hoàng Giang",
          "D. Lời dặn dò của mẹ chồng trước lúc lâm chung"
        ],
        correctIndex: 1,
        explanation: "Hoàn toàn chính xác! 'Chiếc bóng trên vách' vừa gây ra nỗi nghi oan của Trương Sinh (thắt nút), vừa giúp chàng nhận ra sự thật khi tự mình ngồi trước đèn đêm (mở nút)."
      },
      {
        question: "Câu 4: Trong câu thơ 'Áo chàm đưa buổi phân li / Cầm tay nhau biết nói gì hôm nay' (Tố Hữu), hình ảnh 'Áo chàm' sử dụng biện pháp tu từ nào?",
        options: [
          "A. So sánh",
          "B. Nhân hóa",
          "C. Hoán dụ (Lấy dấu hiệu của sự vật để gọi sự vật)",
          "D. Nói quá"
        ],
        correctIndex: 2,
        explanation: "Đúng rồi! 'Áo chàm' là trang phục truyền thống quen thuộc (dấu hiệu gần gũi) dùng để chỉ đồng bào Việt Bắc trong buổi chia tay đầy lưu luyến."
      }
    ];

    /* ========================================================================
       6. HÀM TIỆN ÍCH AN TOÀN CHO TRÌNH DUYỆT & SANDBOX (LOCALSTORAGE, TOAST)
       ======================================================================== */
    function safeGetStorage(key) {
      try {
        return localStorage.getItem(key);
      } catch (err) {
        return null;
      }
    }

    function safeSetStorage(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (err) {
        // Bỏ qua nếu trình duyệt chặn bộ nhớ cục bộ
      }
    }

    function safeRemoveStorage(key) {
      try {
        localStorage.removeItem(key);
      } catch (err) {
        // Bỏ qua
      }
    }

    let toastTimer = null;
    function showToast(message) {
      const toast = document.getElementById("toastNotification");
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("show");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 4200);
    }

    function copyTextToClipboard(text, onSuccess) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          onSuccess();
        }).catch(() => {
          fallbackCopyText(text, onSuccess);
        });
      } else {
        fallbackCopyText(text, onSuccess);
      }
    }

    function fallbackCopyText(text, onSuccess) {
      const tempArea = document.createElement("textarea");
      tempArea.value = text;
      tempArea.style.position = "fixed";
      tempArea.style.opacity = "0";
      document.body.appendChild(tempArea);
      tempArea.focus();
      tempArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        // Không sao
      }
      document.body.removeChild(tempArea);
      onSuccess();
    }

    /* ========================================================================
       7. KHỞI TẠO GIAO DIỆN SÁNG / TỐI & CẬP NHẬT THÔNG TIN GIÁO VIÊN
       ======================================================================== */
    const DEFAULT_PORTRAIT_SRC = document.getElementById("teacherPortraitImg").getAttribute("src");

    function initThemeAndIdentity() {
      const savedTheme = safeGetStorage("gocVanChuong_theme") || "light";
      applyTheme(savedTheme);

      const savedSchool = safeGetStorage("gocVanChuong_school") || TEACHER_CONFIG.schoolOrLocality;
      updateSchoolDisplay(savedSchool);

      const savedPortrait = safeGetStorage("gocVanChuong_portrait");
      if (savedPortrait) {
        document.getElementById("teacherPortraitImg").src = savedPortrait;
      }
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      const btn = document.getElementById("themeToggleBtn");
      if (btn) {
        btn.textContent = theme === "dark" ? "☀️" : "🌙";
        btn.title = theme === "dark" ? "Chuyển sang Chế độ Sáng" : "Chuyển sang Chế độ Đọc sách ban đêm";
      }
      safeSetStorage("gocVanChuong_theme", theme);
    }

    function updateSchoolDisplay(schoolText) {
      const heroSchool = document.getElementById("schoolPlaceholderText");
      const footerSchool = document.getElementById("footerSchoolName");
      if (heroSchool) heroSchool.textContent = schoolText;
      if (footerSchool) footerSchool.textContent = schoolText;
    }

    /* ========================================================================
       8. RENDER KHO HỌC LIỆU KHỐI 6-9 + BỘ LỌC + TÌM KIẾM THỜI GIAN THỰC
       ======================================================================== */
    let currentFilter = "all";
    let currentSearchQuery = "";

    function renderLessons() {
      const grid = document.getElementById("lessonsGrid");
      if (!grid) return;

      const normalizedQuery = currentSearchQuery.trim().toLowerCase();

      const filtered = LESSONS_DATA.filter((item) => {
        const matchFilter =
          currentFilter === "all" ||
          item.grade === currentFilter ||
          (currentFilter === "Kĩ năng Viết" && item.isWritingSkill);

        const matchQuery =
          !normalizedQuery ||
          item.title.toLowerCase().includes(normalizedQuery) ||
          item.summary.toLowerCase().includes(normalizedQuery) ||
          item.subCategory.toLowerCase().includes(normalizedQuery) ||
          item.tags.some((t) => t.toLowerCase().includes(normalizedQuery));

        return matchFilter && matchQuery;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="empty-state">
            <h3 class="pillar-title">Không tìm thấy học liệu phù hợp</h3>
            <p style="color: var(--text-secondary); margin-bottom: 16px;">
              Không có bài học nào khớp với từ khóa "<strong>${escapeHtml(currentSearchQuery)}</strong>" trong danh mục hiện tại.
            </p>
            <button type="button" class="btn btn-primary" id="resetFilterBtn">Hiển thị tất cả 8 bài học</button>
          </div>
        `;
        const resetBtn = document.getElementById("resetFilterBtn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            currentFilter = "all";
            currentSearchQuery = "";
            document.getElementById("lessonSearchInput").value = "";
            document.querySelectorAll("#lessonFilterPills .filter-btn").forEach((b) => {
              b.classList.toggle("active", b.getAttribute("data-filter") === "all");
            });
            renderLessons();
          });
        }
        return;
      }

      grid.innerHTML = filtered
        .map(
          (lesson) => `
          <article class="lesson-card">
            <div>
              <div class="lesson-meta-top">
                <span class="grade-badge">${escapeHtml(lesson.grade)}</span>
                <span class="sub-category-badge">${escapeHtml(lesson.subCategory)}</span>
              </div>
              <h3 class="lesson-title">${escapeHtml(lesson.title)}</h3>
              <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
              <div class="lesson-tags">
                ${lesson.tags.map((tag) => `<span class="lesson-tag">#${escapeHtml(tag)}</span>`).join("")}
              </div>
            </div>
            <div class="lesson-card-footer">
              <button type="button" class="btn-detail" data-lesson-id="${lesson.id}">
                📖 Xem chi tiết bài học
              </button>
            </div>
          </article>
        `
        )
        .join("");

      grid.querySelectorAll("[data-lesson-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const lessonId = btn.getAttribute("data-lesson-id");
          openLessonModal(lessonId);
        });
      });
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    /* ========================================================================
       9. RENDER CHUYÊN ĐỀ ĐỒNG NGHIỆP & TẢN VĂN
       ======================================================================== */
    function renderColleagueTopics() {
      const container = document.getElementById("colleaguesGrid");
      if (!container) return;

      container.innerHTML = COLLEAGUE_TOPICS.map(
        (topic) => `
        <article class="topic-card">
          <div>
            <div class="topic-header">
              <div class="topic-number">${topic.number}</div>
              <div>
                <span class="sub-category-badge" style="display:inline-block; margin-bottom:6px;">${escapeHtml(topic.badge)}</span>
                <h3 class="topic-title">${escapeHtml(topic.title)}</h3>
              </div>
            </div>
            <p class="topic-desc">${escapeHtml(topic.desc)}</p>
          </div>
          <div class="topic-actions">
            <button type="button" class="btn-topic-view" data-topic-id="${topic.id}">
              📑 Xem nội dung chuyên đề
            </button>
            <a href="https://zalo.me/0983507192" target="_blank" rel="noopener noreferrer" class="btn-topic-zalo">
              💬 Trao đổi chuyên môn qua Zalo
            </a>
          </div>
        </article>
      `
      ).join("");

      container.querySelectorAll("[data-topic-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          openTopicModal(btn.getAttribute("data-topic-id"));
        });
      });
    }

    function renderEssays() {
      const container = document.getElementById("essaysGrid");
      if (!container) return;

      container.innerHTML = ESSAYS_DATA.map(
        (essay) => `
        <article class="essay-card">
          <span class="essay-audience">${escapeHtml(essay.audience)}</span>
          <h3 class="essay-title">${escapeHtml(essay.title)}</h3>
          <p class="essay-excerpt">${escapeHtml(essay.excerpt)}</p>
          <div class="essay-footer">
            <span>⏱️ ${escapeHtml(essay.readingTime)}</span>
            <button type="button" class="upload-preview-btn" data-essay-id="${essay.id}">
              Đọc trọn vẹn ➔
            </button>
          </div>
        </article>
      `
      ).join("");

      container.querySelectorAll("[data-essay-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          openEssayModal(btn.getAttribute("data-essay-id"));
        });
      });
    }

    /* ========================================================================
       10. QUẢN LÝ MODAL (CHI TIẾT HỌC LIỆU, CHUYÊN ĐỀ, TẢN VĂN, CHỈNH SỬA TRƯỜNG HỌC)
       ======================================================================== */
    const modalEl = document.getElementById("contentModal");
    const modalBadgeEl = document.getElementById("modalBadge");
    const modalTitleEl = document.getElementById("modalTitle");
    const modalBodyEl = document.getElementById("modalBody");
    const printModalBtn = document.getElementById("printModalBtn");

    function openModal(badgeText, titleText, bodyHtml, showPrintButton = true) {
      modalBadgeEl.textContent = badgeText;
      modalTitleEl.textContent = titleText;
      modalBodyEl.innerHTML = bodyHtml;
      printModalBtn.style.display = showPrintButton ? "inline-flex" : "none";
      modalEl.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modalEl.classList.remove("open");
      document.body.style.overflow = "";
    }

    function openLessonModal(lessonId) {
      const lesson = LESSONS_DATA.find((l) => l.id === lessonId);
      if (!lesson) return;

      const html = `
        <div class="modal-section-block">
          <h4>🎯 1. Mục tiêu cần đạt (Chuẩn CT GDPT 2018)</h4>
          <ul>
            ${lesson.objectives.map((obj) => `<li>${escapeHtml(obj)}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-section-block">
          <h4>🗺️ 2. Sơ đồ tóm tắt kiến thức trọng tâm</h4>
          <ul>
            ${lesson.mindmap.map((node) => `<li>${escapeHtml(node)}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-section-block">
          <h4>💡 3. Gợi ý câu hỏi tư duy &amp; thảo luận</h4>
          <ul>
            ${lesson.thinkingQuestions.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-section-block">
          <h4>✍️ 4. Đoạn văn mẫu tham khảo (Cô Hòa Đồng biên soạn)</h4>
          <div class="sample-paragraph-box">
            “${escapeHtml(lesson.sampleParagraph)}”
          </div>
        </div>
      `;

      openModal(`${lesson.grade} • ${lesson.subCategory}`, lesson.title, html, true);
    }

    function openTopicModal(topicId) {
      const topic = COLLEAGUE_TOPICS.find((t) => t.id === topicId);
      if (!topic) return;

      const html = `
        ${topic.contentBlocks
          .map(
            (b) => `
          <div class="modal-section-block">
            <h4>${escapeHtml(b.heading)}</h4>
            <ul>
              ${b.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>
        `
          )
          .join("")}
        <div class="sample-paragraph-box">
          <strong>💬 Lời nhắn từ Cô Hòa Đồng:</strong> ${escapeHtml(topic.sampleNote)}
        </div>
      `;

      openModal(`Chuyên đề ${topic.number} • ${topic.badge}`, topic.title, html, true);
    }

    function openEssayModal(essayId) {
      const essay = ESSAYS_DATA.find((e) => e.id === essayId);
      if (!essay) return;

      const html = `
        <div style="margin-bottom: 18px; color: var(--text-muted); font-size: 0.9rem;">
          Chuyên mục: <strong>${escapeHtml(essay.audience)}</strong> • Thời lượng: ${escapeHtml(essay.readingTime)}
        </div>
        ${essay.fullContent
          .map(
            (para) => `
          <p style="font-family: var(--font-lora); font-size: 1.08rem; margin-bottom: 18px; line-height: 1.85;">
            ${escapeHtml(para)}
          </p>
        `
          )
          .join("")}
        <div class="sample-paragraph-box" style="margin-top: 20px;">
          — <strong>Cô Hòa Đồng</strong> (Giáo viên Ngữ văn THCS • Zalo: 0983507192)
        </div>
      `;

      openModal(essay.audience, essay.title, html, true);
    }

    function openEditSchoolModal() {
      const currentSchool = safeGetStorage("gocVanChuong_school") || TEACHER_CONFIG.schoolOrLocality;
      const html = `
        <div class="modal-section-block">
          <h4>🏫 Cập nhật thông tin Trường học / Địa phương hiển thị trên Website</h4>
          <p style="margin-bottom: 14px; font-size: 0.94rem; color: var(--text-secondary);">
            Nhập tên Trường THCS và Địa phương của cô để hiển thị ngay trên phần Đầu trang và Chân trang (Ví dụ: <em>Trường THCS Nguyễn Du – Phú Thọ</em>):
          </p>
          <div class="form-group">
            <label for="schoolInputModal">Tên Trường học / Địa phương:</label>
            <input type="text" id="schoolInputModal" class="form-control" value="${escapeHtml(currentSchool)}" placeholder="Nhập tên trường học và địa phương..." />
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button type="button" class="btn btn-primary" id="saveSchoolModalBtn">💾 Lưu thông tin</button>
            <button type="button" class="btn btn-facebook" id="resetSchoolModalBtn">Khôi phục nhãn mặc định</button>
          </div>
        </div>
      `;

      openModal("Tùy chỉnh thương hiệu cá nhân", "Cập nhật Trường Học / Địa Phương", html, false);

      const saveBtn = document.getElementById("saveSchoolModalBtn");
      const resetBtn = document.getElementById("resetSchoolModalBtn");
      const inputEl = document.getElementById("schoolInputModal");

      if (saveBtn && inputEl) {
        saveBtn.addEventListener("click", () => {
          const val = inputEl.value.trim() || TEACHER_CONFIG.schoolOrLocality;
          safeSetStorage("gocVanChuong_school", val);
          updateSchoolDisplay(val);
          closeModal();
          showToast("Đã cập nhật tên Trường học / Địa phương thành công!");
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          safeRemoveStorage("gocVanChuong_school");
          updateSchoolDisplay(TEACHER_CONFIG.schoolOrLocality);
          closeModal();
          showToast("Đã khôi phục nhãn [TRƯỜNG HỌC / ĐỊA PHƯƠNG] mặc định.");
        });
      }
    }

    function openDeployGuideModal() {
      const html = `
        <div class="modal-section-block">
          <h4>📂 1. Cách sử dụng ngay hoặc tách thành 3 file (index.html, style.css, script.js)</h4>
          <ul>
            <li><strong>Cách 1 (Khuyên dùng – 1 file duy nhất):</strong> Giữ nguyên file <code>index.html</code> All-in-One này. Bạn có thể mở trực tiếp trên máy tính, điện thoại hoặc tải thẳng 1 file lên GitHub Pages là chạy hoàn hảo 100%.</li>
            <li><strong>Cách 2 (Tách thành 3 file nếu muốn quản lý riêng):</strong>
              <ol style="padding-left: 20px; margin-top: 6px;">
                <li>Tạo file <code>style.css</code>: Cắt toàn bộ nội dung bên trong cặp thẻ <code>&lt;style&gt;...&lt;/style&gt;</code> dán vào <code>style.css</code>, sau đó thay bằng dòng <code>&lt;link rel="stylesheet" href="style.css" /&gt;</code> trong <code>&lt;head&gt;</code>.</li>
                <li>Tạo file <code>script.js</code>: Cắt toàn bộ nội dung bên trong cặp thẻ <code>&lt;script&gt;...&lt;/script&gt;</code> ở cuối trang dán vào <code>script.js</code>, sau đó thay bằng dòng <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code> trước thẻ đóng <code>&lt;/body&gt;</code>.</li>
              </ol>
            </li>
          </ul>
        </div>

        <div class="modal-section-block">
          <h4>🖼️ 2. Cách thay ảnh chân dung thật vĩnh viễn</h4>
          <ul>
            <li>Đặt file ảnh chân dung thật của cô (ví dụ: <code>co-hoa-dong.jpg</code>) cùng thư mục với file <code>index.html</code>.</li>
            <li>Mở file <code>index.html</code> bằng Notepad hoặc VS Code, tìm dòng chú thích <code>&lt;!-- Thay đường dẫn ảnh chân dung thật tại thuộc tính src này --&gt;</code> và đổi <code>src="..."</code> thành <code>src="co-hoa-dong.jpg"</code>.</li>
          </ul>
        </div>

        <div class="modal-section-block">
          <h4>🚀 3. Các bước đưa Website lên GitHub Pages miễn phí</h4>
          <ul>
            <li><strong>Bước 1:</strong> Đăng nhập <a href="https://github.com" target="_blank" rel="noopener noreferrer" style="color: var(--accent-burgundy); font-weight:700;">GitHub.com</a> và bấm <strong>New repository</strong> (Đặt tên ví dụ: <code>goc-van-chuong</code>, chọn Public).</li>
            <li><strong>Bước 2:</strong> Chọn <strong>uploading an existing file</strong>, kéo thả file <code>index.html</code> (và ảnh chân dung nếu có) vào rồi bấm <strong>Commit changes</strong>.</li>
            <li><strong>Bước 3:</strong> Vào mục <strong>Settings ➔ Pages</strong>, tại phần <em>Branch</em> chọn <strong>main</strong> ➔ <strong>Save</strong>. Sau 1 phút, website sẽ có đường link chính thức để chia sẻ lên Zalo &amp; Facebook!</li>
          </ul>
        </div>
      `;

      openModal("Hướng dẫn Kỹ thuật & Triển khai", "Cách Tách File, Thay Ảnh Thật & Đưa Lên GitHub Pages", html, true);
    }

    /* ========================================================================
       11. TÍNH NĂNG HỘP TRÍCH DẪN NGẪU NHIÊN & MINI QUIZ VĂN HỌC
       ======================================================================== */
    let currentQuoteIndex = 0;

    function initQuoteBox() {
      const newQuoteBtn = document.getElementById("newQuoteBtn");
      const copyQuoteBtn = document.getElementById("copyQuoteBtn");
      const quoteBox = document.getElementById("quoteDisplayBox");
      const quoteTextEl = document.getElementById("randomQuoteText");
      const quoteAuthorEl = document.getElementById("randomQuoteAuthor");

      if (newQuoteBtn) {
        newQuoteBtn.addEventListener("click", () => {
          let nextIndex = Math.floor(Math.random() * LITERARY_QUOTES.length);
          if (nextIndex === currentQuoteIndex) {
            nextIndex = (nextIndex + 1) % LITERARY_QUOTES.length;
          }
          currentQuoteIndex = nextIndex;
          const q = LITERARY_QUOTES[currentQuoteIndex];

          quoteBox.style.opacity = "0";
          setTimeout(() => {
            quoteTextEl.textContent = q.text;
            quoteAuthorEl.textContent = "— " + q.author;
            quoteBox.style.opacity = "1";
          }, 200);
        });
      }

      if (copyQuoteBtn) {
        copyQuoteBtn.addEventListener("click", () => {
          const q = LITERARY_QUOTES[currentQuoteIndex];
          const textToCopy = `${q.text} — ${q.author}`;
          copyTextToClipboard(textToCopy, () => {
            showToast("Đã sao chép thông điệp văn chương vào bộ nhớ tạm!");
          });
        });
      }
    }

    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;

    function renderQuizQuestion() {
      const q = LITERARY_QUIZ[currentQuizIndex];
      const progressBadge = document.getElementById("quizProgressBadge");
      const questionText = document.getElementById("quizQuestionText");
      const optionsContainer = document.getElementById("quizOptionsContainer");
      const feedbackBox = document.getElementById("quizFeedbackBox");
      const scoreText = document.getElementById("quizScoreText");

      quizAnswered = false;
      progressBadge.textContent = `Câu ${currentQuizIndex + 1}/${LITERARY_QUIZ.length}`;
      questionText.textContent = q.question;
      feedbackBox.style.display = "none";
      feedbackBox.textContent = "";
      scoreText.textContent = `Điểm: ${quizScore}/${LITERARY_QUIZ.length}`;

      optionsContainer.innerHTML = q.options
        .map(
          (opt, idx) => `
          <button type="button" class="quiz-option-btn" data-opt-index="${idx}">
            ${escapeHtml(opt)}
          </button>
        `
        )
        .join("");

      optionsContainer.querySelectorAll(".quiz-option-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (quizAnswered) return;
          quizAnswered = true;
          const chosenIdx = Number(btn.getAttribute("data-opt-index"));

          const allBtns = optionsContainer.querySelectorAll(".quiz-option-btn");
          allBtns.forEach((b, i) => {
            if (i === q.correctIndex) {
              b.classList.add("correct");
            } else if (i === chosenIdx) {
              b.classList.add("wrong");
            }
          });

          if (chosenIdx === q.correctIndex) {
            quizScore++;
            scoreText.textContent = `Điểm: ${quizScore}/${LITERARY_QUIZ.length}`;
          }

          feedbackBox.textContent = q.explanation;
          feedbackBox.style.display = "block";
        });
      });
    }

    /* ========================================================================
       12. XỬ LÝ BIỂU MẪU GỬI BÀI QUA ZALO 0983507192 & FACEBOOK
       ======================================================================== */
    function handleContactSubmission(channel) {
      const nameEl = document.getElementById("senderName");
      const roleEl = document.getElementById("senderRole");
      const topicEl = document.getElementById("senderTopic");
      const messageEl = document.getElementById("senderMessage");
      const previewBox = document.getElementById("clipboardPreviewBox");

      const name = nameEl.value.trim();
      const role = roleEl.value;
      const topic = topicEl.value;
      const message = messageEl.value.trim();

      if (!name || !message) {
        showToast("Vui lòng nhập Họ tên và Nội dung câu hỏi / đoạn văn trước khi gửi!");
        if (!name) nameEl.focus();
        else messageEl.focus();
        return;
      }

      const compiledMessage =
        `[GÓC VĂN CHƯƠNG CÔ HÒA ĐỒNG]\n` +
        `• Người gửi: ${name} (${role})\n` +
        `• Chủ đề: ${topic}\n` +
        `• Nội dung:\n${message}`;

      copyTextToClipboard(compiledMessage, () => {
        previewBox.style.display = "block";
        previewBox.innerHTML = `
          ✅ <strong>Đã sao chép nội dung vào bộ nhớ tạm (Clipboard)!</strong><br/>
          Hệ thống đang mở ${channel === "zalo" ? "Zalo (0983507192)" : "Facebook"} của Cô Hòa Đồng. Bạn chỉ cần nhấn <strong>Dán (Ctrl + V)</strong> vào ô trò chuyện để gửi ngay.
        `;
        showToast("Đã sao chép nội dung! Hãy nhấn Dán (Ctrl+V) vào cửa sổ chat vừa mở.");

        const targetUrl =
          channel === "zalo"
            ? TEACHER_CONFIG.zaloUrl
            : TEACHER_CONFIG.facebookUrl;

        window.open(targetUrl, "_blank", "noopener,noreferrer");
      });
    }

    /* ========================================================================
       13. GẮN KẾT TOÀN BỘ SỰ KIỆN KHI TRANG TẢI XONG
       ======================================================================== */
    document.addEventListener("DOMContentLoaded", () => {
      initThemeAndIdentity();
      renderLessons();
      renderColleagueTopics();
      renderEssays();
      initQuoteBox();
      renderQuizQuestion();

      // Chuyển đổi Sáng / Tối
      document.getElementById("themeToggleBtn").addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        showToast(
          next === "dark"
            ? "Đã bật Chế độ Đọc sách ban đêm (Night Reading Mode)."
            : "Đã chuyển về Giao diện Sáng ấm áp."
        );
      });

      // Menu di động
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mainNavList = document.getElementById("mainNavList");
      mobileMenuBtn.addEventListener("click", () => {
        mainNavList.classList.toggle("open");
        mobileMenuBtn.textContent = mainNavList.classList.contains("open") ? "✕" : "☰";
      });

      document.querySelectorAll("#mainNavList .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelectorAll("#mainNavList .nav-link").forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
          mainNavList.classList.remove("open");
          mobileMenuBtn.textContent = "☰";
        });
      });

      // Đổi ảnh chân dung xem trước (FileReader + localStorage)
      const portraitFileInput = document.getElementById("portraitFileInput");
      const teacherPortraitImg = document.getElementById("teacherPortraitImg");
      const resetPhotoBtn = document.getElementById("resetPhotoBtn");

      portraitFileInput.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
          const dataUrl = evt.target.result;
          teacherPortraitImg.src = dataUrl;
          safeSetStorage("gocVanChuong_portrait", dataUrl);
          showToast("Đã cập nhật ảnh chân dung xem trước!");
        };
        reader.readAsDataURL(file);
      });

      resetPhotoBtn.addEventListener("click", () => {
        teacherPortraitImg.src = DEFAULT_PORTRAIT_SRC;
        safeRemoveStorage("gocVanChuong_portrait");
        portraitFileInput.value = "";
        showToast("Đã khôi phục ảnh chân dung nghệ thuật mặc định.");
      });

      // Nút sửa tên Trường học / Địa phương
      document.getElementById("editSchoolBtn").addEventListener("click", openEditSchoolModal);

      // Bộ lọc Học liệu
      document.querySelectorAll("#lessonFilterPills .filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("#lessonFilterPills .filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          currentFilter = btn.getAttribute("data-filter");
          renderLessons();
        });
      });

      // Tìm kiếm thời gian thực
      document.getElementById("lessonSearchInput").addEventListener("input", (e) => {
        currentSearchQuery = e.target.value;
        renderLessons();
      });

      // Câu tiếp theo trong Mini Quiz
      document.getElementById("nextQuizBtn").addEventListener("click", () => {
        currentQuizIndex = (currentQuizIndex + 1) % LITERARY_QUIZ.length;
        renderQuizQuestion();
      });

      // Gửi bài qua Zalo & Facebook
      document.getElementById("sendViaZaloBtn").addEventListener("click", () => {
        handleContactSubmission("zalo");
      });

      document.getElementById("sendViaFacebookBtn").addEventListener("click", () => {
        handleContactSubmission("facebook");
      });

      // Đóng / Mở Modal & In bài học PDF
      document.getElementById("closeModalBtn").addEventListener("click", closeModal);
      document.getElementById("closeModalFooterBtn").addEventListener("click", closeModal);
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalEl.classList.contains("open")) {
          closeModal();
        }
      });

      printModalBtn.addEventListener("click", () => {
        window.print();
      });

      // Mở hướng dẫn GitHub Pages
      document.getElementById("openDeployGuideBtn").addEventListener("click", openDeployGuideModal);

      // Nút Lên đầu trang (Back to top)
      const backToTopBtn = document.getElementById("backToTopBtn");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 360) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      });

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
