`useCallback` là một hook trong React được sử dụng để giảm bớt việc tạo lại các hàm callback mỗi khi component render lại. Khi bạn truyền một hàm vào useCallback, hook này sẽ trả về một phiên bản memoized của hàm đó. Điều này có nghĩa là hàm được trả về sẽ chỉ thay đổi khi các dependencies (các biến được liệt kê trong mảng dependencies) thay đổi.

`SƠ ĐỒ TƯ DUY`: https://lucid.app/lucidchart/e63f0a19-6c4f-423c-8563-e85f860218a4/edit?viewport_loc=-3777%2C-1524%2C9321%2C4311%2C0_0&invitationId=inv_23736f06-0650-417c-8577-552fb49c62df
