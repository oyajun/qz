"use client";
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

import { setCookie, getCookie } from 'cookies-next';

export default function SearchBox() {
  function search(formData: FormData) {

    const query = formData.get("query") as string;

    const qiita = "https://qiita.com/search?q=" + query;
    const zenn = "https://zenn.dev/search?q=" + query;

    window.open(zenn, "_blank");
    window.open(qiita, "_blank");

    if (getCookie('accessed') === undefined) {
      alert('検索結果が開かない場合は、ブラウザの設定でポップアップを許可してください。');
      setCookie('accessed', true);
    }
  }

  return (
    <form action={search}>
      <Stack spacing={1}>
        <Input name='query' type='search' autoFocus />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
