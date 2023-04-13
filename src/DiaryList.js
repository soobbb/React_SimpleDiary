import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있읍니다.</h4>
      <div>
        {/* map((it, idx)) -> key = {idx} 고유한 id값이 없을 때 index 파라미터를 줘서 사용할 수 도 있다. */}
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

// App에 더미리스트 대신 undefined일 때 빈배열 주기
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
