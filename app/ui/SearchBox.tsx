"use client";
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function SearchBox() {
  function search(formData: FormData) {

    const query = formData.get("query") as string;

    const qiita = "https://qiita.com/search?q=" + query;
    const zenn = "https://zenn.dev/search?q=" + query;

    let zennWindow = window.open(zenn, "_blank");
    let qiitaWindow = window.open(qiita, "_blank");

    let zennError = false;
    let qiitaError = false;
    if (zennWindow === null || typeof (qiitaWindow) === 'undefined') {
      zennError = true;
    }
    if (qiitaWindow === null || typeof (qiitaWindow) === 'undefined') {
      qiitaError = true;
    }

    if (zennError && qiitaError) {
      alert('検索結果が開けませんでした。ブラウザの設定でポップアップを許可してください。');
    } else if (zennError) {
      alert('Zennの検索結果が開けませんでした。ブラウザの設定でポップアップを許可してください。');
    } else if (qiitaError) {
      alert('Qiitaの検索結果が開けませんでした。ブラウザの設定でポップアップを許可してください。');
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
