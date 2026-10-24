import { NextRequest, NextResponse } from "next/server";
import { getVoteCounts, registerVote, getVotersList, isVotingClosed } from "@/lib/voteStorage";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const wantsList = searchParams.get("list");

    if (wantsList === "1" || wantsList === "true") {
      const voters = await getVotersList();
      return NextResponse.json({ success: true, count: voters.length, voters });
    }

    const votes = await getVoteCounts();
    return NextResponse.json({
      success: true,
      votes,
      isClosed: isVotingClosed(),
      deadline: "2026-11-18T23:59:59-03:00",
      deadlineFormatted: "18 de Novembro às 23h59",
    });
  } catch (err) {
    console.error("Erro na rota GET /api/vote:", err);
    return NextResponse.json(
      { success: false, error: "FETCH_FAILED", message: "Erro ao buscar votação." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { heroId, instagramHandle } = body;

    if (!heroId || !instagramHandle) {
      return NextResponse.json(
        {
          success: false,
          error: "MISSING_FIELDS",
          message: "Informe o guerreiro escolhido e seu @ de usuário do Instagram.",
        },
        { status: 400 }
      );
    }

    const result = await registerVote(heroId, String(instagramHandle));

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("Erro na rota POST /api/vote:", err);
    return NextResponse.json(
      { success: false, error: "INTERNAL_ERROR", message: "Falha ao processar voto." },
      { status: 500 }
    );
  }
}
