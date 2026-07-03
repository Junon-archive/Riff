Riff 도네이션 QR 이미지 — 운영자 가이드
========================================

이 폴더(web_app/public/donate/)에 QR 이미지를 넣으면 Astro 빌드 시 그대로
`/donate/<파일명>` 경로로 서빙됩니다. 별도 코드 수정 없이 아래 두 단계만 하면
바로 동작합니다(플러그앤플레이).

1) 이미지 파일을 이 폴더에 넣는다.
   채널별 권장 파일명(달라도 되지만, 아래 이름을 쓰면 config.ts 예시와 그대로 맞습니다):
     - toss.png       (토스 송금 QR)
     - kakaopay.png    (카카오페이 송금 QR) — 현재 config.ts 에 예시로 이미 연결돼 있음
     - paypal.png      (PayPal QR, 있다면)
     - bmc.png         (Buy Me a Coffee QR, 있다면)

   형식: PNG/JPG 권장, 정사각형(예: 600x600), 300KB 이하 권장(모바일 바텀시트에
   200x200 정도로 표시됩니다).

2) web_app/src/config.ts 의 DONATION_CHANNELS 값을 채운다.

   export const DONATION_CHANNELS = {
     toss:     { url: 'https://...' },                                // 링크만
     kakaopay: { url: 'https://...', qr: '/donate/kakaopay.png' },     // 링크 + QR
     paypal:   { url: 'https://paypal.me/...' },
     bmc:      { url: 'https://buymeacoffee.com/...' },
   };

   규칙:
   - url 만 채우면        → 버튼 클릭 시 새 창으로 링크가 열립니다(기존 동작 유지).
   - qr 도 채우면(경로만)  → 버튼 클릭 시 바텀시트 안에서 QR 이미지가 뜹니다.
                             url 도 같이 있으면 QR 아래에 "링크로 열기" 보조 버튼도 함께 뜹니다.
   - url·qr 둘 다 비워두면 → 버튼이 자동으로 비활성화되고 "준비 중" 배지가 붙습니다
                             (깨진 링크·강매 방지 — 값을 채우기 전까지는 안전하게 이 상태로 둡니다).

   즉, 이 폴더에 이미지를 넣고 config.ts 의 문자열 값만 채우면 끝입니다. 컴포넌트나
   스크립트(src/scripts/app.ts, src/layouts/Base.astro)는 수정할 필요가 없습니다.

주의
----
- 이 폴더의 파일은 정적 그대로 배포되므로, 계좌/개인정보가 노출되지 않는 결제사 제공
  공식 QR(카카오페이 "송금 요청 QR", 토스 "송금받기 QR" 등)만 사용하세요.
- 파일명을 바꾸고 싶다면 config.ts 의 qr 경로 문자열만 그에 맞게 바꾸면 됩니다
  (예: `/donate/my-kakaopay-qr.png`).
