// Code generated by copypasta/template/leetcode/generator_test.go
package main

import (
	"github.com/EndlessCheng/codeforces-go/leetcode/testutil"
	"testing"
)

func Test(t *testing.T) {
	t.Log("Current test is [d]")
	examples := [][]string{
		{
			`[[2,6],[5,1],[73,660]]`, 
			`[4,1,50734910]`,
		},
		{
			`[[1,1],[2,2],[3,3],[4,4],[5,5]]`, 
			`[1,2,3,10,5]`,
		},
		// TODO 测试入参最小的情况
		
	}
	targetCaseNum := 0 // -1
	if err := testutil.RunLeetCodeFuncWithExamples(t, waysToFillArray, examples, targetCaseNum); err != nil {
		t.Fatal(err)
	}
}
// https://leetcode-cn.com/contest/biweekly-contest-44/problems/count-ways-to-make-array-with-product/
