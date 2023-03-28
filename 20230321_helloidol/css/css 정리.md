# css정리
## 문서 스타일링 방법
1. ```<TAG style = "">``` <!--숫자 1 왼쪽에 있는 따따따 : 코드라는 뜻-->
2. ```<style>...</style>```
3. .css 파일 만들어서 link

## 형식
```css
selector {
    attribute: value;   /* comment */
}
```

### selector
<pre>
*       모든 태그 다 적용
TAG     특정 태그 적용
#Id     유일한 id에 적용 (ex 학번)
.Class  같은 class에 적용 (ex 반)

<!--시험에 나옴-->
selector1 > selector2   selector1의 자식 selector2에 적용 (바로밑)
selector1 selector2     selector1의 자속 selector2에 적용 
selector1, selector2    selector1과 selector2에 같이 적용
selector1 + selector2   selector1의 첫 자매인 selector2를 선택
selector1 ~ selector2   selector1의 자매 중 모든 selector2를 선택

selector:firsh-child()  
selector:nth=child(n)   
selector:last-child()   

selector:hover          마우스 올렸을 때의 selector

[속성="값"]             <... 속성="값">에 적용
</pre>

# 우선순위
1. !important <!--다 이김-->
2.  ```<TAG style = "">```
3. #id
4. .class
5. TAG
6. \*
- 구채 > 포괄
- 같은 우선순위일 때, 나중에 쓴 게 적용g